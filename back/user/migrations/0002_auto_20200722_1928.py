# Generated by Django 3.0.8 on 2020-07-22 10:28

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='identification',
            field=models.UUIDField(default=uuid.uuid4, editable=False),
        ),
    ]
