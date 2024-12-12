from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='favoritestockmodel',
            name='code',
            field=models.CharField(max_length=10, null=True, unique=True),
        ),
        migrations.AlterField(
            model_name='favoritestockmodel',
            name='name',
            field=models.CharField(max_length=100, unique=True),
        ),
    ]
