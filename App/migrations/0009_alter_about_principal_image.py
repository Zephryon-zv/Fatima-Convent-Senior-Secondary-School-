# Generated by Django 4.2.3 on 2023-08-01 12:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('App', '0008_alter_about_principal_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='about',
            name='principal_image',
            field=models.ImageField(blank=True, null=True, upload_to='about_images/'),
        ),
    ]
