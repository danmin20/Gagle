# Generated by Django 3.0.8 on 2020-07-24 14:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0002_auto_20200722_1928'),
        ('article', '0002_auto_20200724_2301'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='writer',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='user.User'),
        ),
    ]
