# Generated by Django 4.1.2 on 2022-11-02 12:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('review', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Reccommend',
            fields=[
                ('Reccommendid', models.AutoField(primary_key=True, serialize=False)),
                ('ReccommendMenu', models.CharField(max_length=1000)),
                ('ReccommendPic', models.CharField(max_length=1000)),
            ],
        ),
    ]
