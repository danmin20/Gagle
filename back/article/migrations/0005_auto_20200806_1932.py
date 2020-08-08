# Generated by Django 3.0.8 on 2020-08-06 10:32

import article.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('article', '0004_auto_20200802_0917'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='popularity',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='mediacontent',
            name='file',
            field=models.FileField(upload_to=article.models.upload_to),
        ),
    ]
