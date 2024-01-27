from random import choice
from string import ascii_uppercase
from django.db import models
from django.conf import settings


class Teacher(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='teacher'
    )


class Course(models.Model):
    name = models.CharField(
        max_length=100,
    )
    teacher = models.ForeignKey(
        Teacher,
        on_delete=models.CASCADE,
        related_name='courses'
    )
    initial_number_of_students = models.IntegerField(
        default=0,
    )
    timestamp = models.DateTimeField(
        auto_now_add=True,
    )

    def save(self, *args, **kwargs) -> None:
        super().save(*args, **kwargs)
        [CourseStudent.objects.create(course=self)
         for _ in range(self.initial_number_of_students)]


class CourseStudent(models.Model):
    key = models.CharField(
        max_length=6,
        unique=True,
        db_index=True,
        editable=False,
    )
    course = models.ForeignKey(
        Course,
        on_delete=models.CASCADE,
        related_name='students'
    )
    timestamp = models.DateTimeField(
        auto_now_add=True,
    )

    def save(self, *args, **kwargs) -> None:
        if not self.key:
            self.key = self.generate_key()
        return super().save(*args, **kwargs)

    @classmethod
    def generate_key(cls) -> str:
        key = ''.join(choice(ascii_uppercase) for _ in range(6))
        while cls.objects.filter(key=key).exists():
            key = ''.join(choice(ascii_uppercase) for _ in range(6))
        return key


class TaskDefinition(models.Model):
    type = models.CharField(
        max_length=100,
    )
    sub_type = models.CharField(
        max_length=100,
    )

    class Meta:
        unique_together = ('type', 'sub_type')


class Task(models.Model):
    number_of_repetitions = models.IntegerField(
        default=100,
    )
    task_definition = models.ForeignKey(
        TaskDefinition,
        on_delete=models.CASCADE,
        related_name='tasks'
    )
    course = models.ForeignKey(
        Course,
        on_delete=models.CASCADE,
        related_name='tasks'
    )
    threshold = models.IntegerField(
        default=80,
    )


class SingleTaskSubmission(models.Model):
    # TODO: write from fastapi into postgres
    task = models.ForeignKey(
        Task,
        on_delete=models.CASCADE,
        related_name='submissions'
    )
    course_student = models.ForeignKey(
        CourseStudent,
        on_delete=models.CASCADE,
        related_name='submissions'
    )
    correct = models.BooleanField(
        default=False,
    )
    timestamp = models.DateTimeField(
        auto_now_add=True,
    )
