# Generated by Django 3.0.8 on 2020-08-11 14:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('article', '0006_auto_20200811_2309'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='article',
            name='popularity',
        ),
    ]
