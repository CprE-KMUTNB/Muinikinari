from django.db import models

# Create your models here.
class Review(models.Model):
    Reviewid = models.AutoField(primary_key = True)
    ReviewComment = models.CharField(max_length=1000)
    id = models.IntegerField()
    ReviewDate = models.DateField
    name = models.CharField(max_length=500)

class Reccommend(models.Model):
    Reccommendid = models.AutoField(primary_key = True)
    ReccommendMenu = models.CharField(max_length=1000)
    ReccommendPic = models.CharField(max_length=1000)
    