# Generated by Django 5.0.6 on 2024-05-25 15:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0030_rename_autor_cafe_endereco_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='cafe',
            old_name='anopublicado',
            new_name='cntt',
        ),
    ]
