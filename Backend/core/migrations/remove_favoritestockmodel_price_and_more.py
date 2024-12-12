from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_favoritestockmodel_code_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='favoritestockmodel',
            name='price',
        ),
        migrations.AlterField(
            model_name='favoritestockmodel',
            name='code',
            field=models.CharField(max_length=10, unique=True),
        ),
    ]
