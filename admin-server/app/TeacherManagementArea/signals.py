from django.db.models.signals import post_save
from django.dispatch import receiver
from datetime import datetime
from .models import CourseStudent, Task
from .mongodb import mongodb_client


@receiver(post_save, sender=CourseStudent)
def send_student_to_mongo(
    instance: CourseStudent,
    created: bool,
    *args,
    **kwargs,
):
    if not created:
        return
    collection = mongodb_client['pina']['students']
    document = {
        "key": instance.key,
        "course": instance.course.name,
        "timestamp": int(datetime.now().timestamp()),
    }
    collection.insert_one(document)


@receiver(post_save, sender=Task)
def send_task_to_mongo(
    instance: Task,
    created: bool,
    *args,
    **kwargs,
):
    if not created:
        return
    collection = mongodb_client['pina']['tasks']
    document = {
        "position": instance.id,
        "course_id": instance.course.id,
        "number_of_repetitions": instance.number_of_repetitions,
        "task_type": instance.task_definition.type,
        "task_sub_type": instance.task_definition.sub_type,
        "threshold": instance.threshold,
        "timestamp": int(datetime.now().timestamp()),
    }
    collection.insert_one(document)
