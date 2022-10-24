from django.db import models

# Create your models here.
class Menu(models.Model):
    Menuid = models.AutoField(primary_key = True)
    MenuName = models.CharField(max_length=500)
    MenuPrice = models.IntegerField()
    MenuPic = models.ImageField()
    MenuType = models.CharField(max_length=500)

class Restaurant(models.Model):
    Restaurantid = models.AutoField(primary_key = True)
    RestaurantName =models.CharField(max_length=500)
    Menuid = models.IntegerField()
    RestaurantSeat = models.IntegerField()
