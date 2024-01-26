import random
import string
from typing import Union
from fastapi import FastAPI
from dataclasses import dataclass


@dataclass
class GeneratePupilPayload:
    n: int
    teacher_id: str
    root_lvl: int


app = FastAPI()


def generate_random_string(length=5):
    """Generiere einen zufälligen String mit fester Länge."""
    characters = string.ascii_lowercase + string.digits
    return ''.join(random.choice(characters) for _ in range(length))


@app.post("/create-pupil-accounts")
def create_pupil_accounts(payload: GeneratePupilPayload):
    """Erstelle n Benutzerkonten ohne MongoDB."""
    user_accounts = []

    for _ in range(payload.n):
        user_id = generate_random_string()
        user_data = {
            'id': user_id,
            'teacher_id': payload.teacher_id,
            'root_lvl': payload.root_lvl
        }
        user_accounts.append(user_data)

    return {"data":user_accounts}


@app.get("/")
def read_root():
    return {"Hello": "World"}

