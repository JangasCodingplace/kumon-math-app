# Generated by Django 5.0.1 on 2024-01-27 00:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('TeacherManagementArea', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='task',
            name='threshold',
            field=models.IntegerField(default=80),
        ),
    ]