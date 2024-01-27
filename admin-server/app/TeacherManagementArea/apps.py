from django.apps import AppConfig


class TeachermanagementareaConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'TeacherManagementArea'

    def ready(self):
        import TeacherManagementArea.signals  # noqa
