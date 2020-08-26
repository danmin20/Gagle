# Generated by Django 3.1 on 2020-08-25 14:09

import django.contrib.gis.db.models.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("article", "0010_auto_20200816_2320"),
    ]

    operations = [
        migrations.AddField(
            model_name="article",
            name="location",
            field=django.contrib.gis.db.models.fields.PointField(
                geography=True, null=True, srid=4326
            ),
        ),
    ]
