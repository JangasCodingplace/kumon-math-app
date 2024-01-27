from django.contrib import admin
from . import models


@admin.register(models.Teacher)
class TeacherAdmin(admin.ModelAdmin):
    pass


@admin.register(models.Course)
class CourseAdmin(admin.ModelAdmin):
    pass


@admin.register(models.CourseStudent)
class CourseStudentAdmin(admin.ModelAdmin):
    pass


@admin.register(models.TaskDefinition)
class TaskDefinitionAdmin(admin.ModelAdmin):
    pass


@admin.register(models.Task)
class TaskAdmin(admin.ModelAdmin):
    pass


@admin.register(models.SingleTaskSubmission)
class SingleTaskSubmissionAdmin(admin.ModelAdmin):
    pass
