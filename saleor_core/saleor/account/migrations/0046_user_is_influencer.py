# Generated by Django 3.0.6 on 2020-10-22 10:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0045_auto_20200427_0425'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='is_influencer',
            field=models.BooleanField(default=True),
        ),
    ]