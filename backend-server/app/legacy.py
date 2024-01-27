import os
import base64
import requests
import cairosvg
from io import BytesIO
from datetime import datetime
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pymongo.mongo_client import MongoClient
from dotenv import load_dotenv
from dataclasses import dataclass
from pymongo.server_api import ServerApi

load_dotenv()

MATHPIX_CONFIC = {
   "MATHPIX_APP_ID": os.environ["MATHPIX_APP_ID"], 
   "MATHPIX_SECRET_KEY": os.environ["MATHPIX_SECRET_KEY"],
}

MONGODB_CONFIG = {
    "MONGODB_FQDN": os.environ["MONGODB_FQDN"],
    "MONGODB_USERNAME": os.environ["MONGODB_USERNAME"],
    "MONGODB_PASSWORD": os.environ["MONGODB_PASSWORD"],
}

MONGODB_CLIENT = MongoClient(
    f"mongodb+srv://{MONGODB_CONFIG['MONGODB_USERNAME']}:{MONGODB_CONFIG['MONGODB_PASSWORD']}@{MONGODB_CONFIG['MONGODB_FQDN']}/?retryWrites=true&w=majority",
    server_api=ServerApi('1'),
)

try:
    MONGODB_CLIENT.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@dataclass
class MathTask:
    latexTask: str
    simpleSolution: str
    latexSolution: str
    version: str


@dataclass
class MathImgTask:
    user: str
    base64_image: str
    task: MathTask


@dataclass
class TaskResponse:
    user: str
    task: MathTask
    ai_response: dict


def open_image_as_base64(file_name: str) -> str:
    with open(file_name, "rb") as image_file:
        image_data = image_file.read()
        base64_data = base64.b64encode(image_data).decode("utf-8")
        return base64_data


def convert_svg_base64_to_png_base64(svg_base64):
    svg_data = base64.b64decode(svg_base64)

    png_output = BytesIO()
    cairosvg.svg2png(bytestring=svg_data, write_to=png_output)

    png_base64 = base64.b64encode(png_output.getvalue()).decode('utf-8')
    
    return png_base64


def send_base64_to_mathpix(base_64_encoded_image: str) -> dict:
    base_64_encoded_image_png = convert_svg_base64_to_png_base64(base_64_encoded_image)
    data = {
        "src": f"data:image/jpeg;base64,{base_64_encoded_image_png}",
        "formats": ["latex_normal", ],
    }
    headers = {
        "app_id": MATHPIX_CONFIC["MATHPIX_APP_ID"],
        "app_key": MATHPIX_CONFIC["MATHPIX_SECRET_KEY"]
    }
    response = requests.post(
        "https://api.mathpix.com/v3/latex",
        json=data,
        headers=headers,
    )
    response.raise_for_status()
    return response.json()


@app.post("/process-task")
def process_task(data: MathImgTask):
    # return {}
    mathpix_response = send_base64_to_mathpix(data.base64_image)
    collection = MONGODB_CLIENT['pina']['tasks']
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


@app.get("/get-tasks/{user}", response_model=list[TaskResponse])
def get_tasks(user: str) -> list[TaskResponse]:
    collection = MONGODB_CLIENT['pina']['tasks']
    tasks = collection.find({"user": user})

    # MongoDB-document to taskresponse-dataclass
    task_responses = [
        TaskResponse(
            user=task["user"],
            task=task["task"],
            ai_response={
                "type": task["ai_response"]["type"],
                "latex_normal": task["ai_response"]["response"]["latex_normal"],
            },
        )
        for task in tasks
    ]
    return task_responses