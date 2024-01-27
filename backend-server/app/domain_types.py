from dataclasses import dataclass


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
class GeneratePupilPayload:
    n: int
    teacher_id: str
    root_lvl: int


@dataclass
class ApplyTaskPayload:
    position: int
    student_key: str
    is_correct: bool


@dataclass
class TaskResponse:
    user: str
    task: MathTask
    ai_response: dict
