# Generated by Django 5.0.6 on 2024-07-13 09:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='github_url',
            field=models.URLField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='project',
            name='live_url',
            field=models.URLField(blank=True, null=True),
        ),
    ]
