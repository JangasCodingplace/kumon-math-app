import requests
import base64
import cairosvg
from io import BytesIO
from fastapi import FastAPI
from dotenv import load_dotenv
from datetime import datetime
from fastapi.middleware.cors import CORSMiddleware

import domain_types
import config

load_dotenv()


app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get('/api/student/{student_key}/get-current-task')
def get_current_task(student_key: str):
    collection = config.MONGODB_CLIENT['pina']['tasks']
    sorted_tasks = collection.find().sort("position", 1)

    submission_collection = config.MONGODB_CLIENT['pina']['applied_tasks']
    for sorted_task in sorted_tasks:
        submissions_correct = submission_collection.aggregate([
            {
                "$match": {
                    "task_position": sorted_task['position'],
                    "student_key": student_key,
                    "is_correct": True
                }
            },
            {
                "$group": {
                    "_id": "$task_position",
                    "count": {"$sum": 1}
                }
            }
        ])

        submissions_total = submission_collection.aggregate([
            {
                "$match": {
                    "task_position": sorted_task['position'],
                    "student_key": student_key,
                }
            },
            {
                "$group": {
                    "_id": "$task_position",
                    "count": {"$sum": 1}
                }
            }
        ])
        submission_count = list(submissions_total)[0]["count"]
        ratio = list(submissions_correct)[0]["count"] / submission_count * 100
        if (
            ratio >= int(sorted_task["threshold"])
            and int(submission_count) > sorted_task["threshold"]
        ):
            continue
        else:
            return {
                "type": sorted_task["task_type"],
                "sub_type": sorted_task["task_sub_type"],
            }


@app.post('/api/student/{student_key}/apply-task')
def apply_task(
    student_key: str,
    payload: domain_types.ApplyTaskPayload
):
    collection = config.MONGODB_CLIENT['pina']['applied_tasks']
    document = {
        "task_position": payload.position,
        "student_key": student_key,
        "is_correct": payload.is_correct,
        "timestamp": int(datetime.now().timestamp()),
    }
    collection.insert_one(document)
    return {"status": "ok"}


def convert_svg_base64_to_png_base64(svg_base64):
    svg_data = base64.b64decode(svg_base64)

    png_output = BytesIO()
    cairosvg.svg2png(bytestring=svg_data, write_to=png_output)

    png_base64 = base64.b64encode(png_output.getvalue()).decode('utf-8')

    return png_base64


def send_base64_to_mathpix(base_64_encoded_image: str) -> dict:
    base_64_encoded_image_png = convert_svg_base64_to_png_base64(
        base_64_encoded_image
    )
    data = {
        "src": f"data:image/jpeg;base64,{base_64_encoded_image_png}",
        "formats": ["latex_normal", ],
    }
    headers = {
        "app_id": config.MATHPIX_CONFIC["MATHPIX_APP_ID"],
        "app_key": config.MATHPIX_CONFIC["MATHPIX_SECRET_KEY"]
    }
    response = requests.post(
        "https://api.mathpix.com/v3/latex",
        json=data,
        headers=headers,
    )
    response.raise_for_status()
    return response.json()


@app.post("/process-task")
def process_task(data: domain_types.MathImgTask):
    # return {}
    print(data.__dict__)
    mathpix_response = send_base64_to_mathpix(data.base64_image)
    print(mathpix_response)
    collection = config.MONGODB_CLIENT['pina']['handwritten_tasks']
    document = {
        "user": data.user,
        "task": data.task.__dict__,
        "ai_response": {
            "type": "mathpix",
            "response": mathpix_response,
        },
        "timestamp": int(datetime.now().timestamp()),
    }
    collection.insert_one(document)
    return mathpix_response


@app.get(
    "/get-tasks/{user}",
    response_model=list[domain_types.TaskResponse]
)
def get_tasks(user: str) -> list[domain_types.TaskResponse]:
    collection = config.MONGODB_CLIENT['pina']['handwritten_tasks']
    tasks = collection.find({"user": user})
    task_response = []
    for task in tasks:
        try:
            task_response.append(
                domain_types.TaskResponse(
                    user=task["user"],
                    task=task["task"],
                    ai_response={
                        "type": task["ai_response"]["type"],
                        "latex_normal": task["ai_response"]["response"]["latex_normal"],
                    },
                )
            )
        except Exception as e:
            print(e)
    return task_response
