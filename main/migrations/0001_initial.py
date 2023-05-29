# Generated by Django 4.2.1 on 2023-05-24 06:46

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Book",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("full_name", models.CharField(max_length=100)),
                ("email", models.CharField(max_length=100)),
                ("time", models.CharField(max_length=10)),
                ("date", models.CharField(max_length=12)),
                ("phone_num", models.CharField(max_length=10)),
            ],
        ),
    ]