from dataclasses import field
from rest_framework import serializers
from random_menu.models import Menu , Restaurant

class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = Menu
        field = ( 'Menuid', 'MenuName', 'MenuPrice', 'MenuPic', 'MenuType')

class RestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        field = ('Restaurantid',' RestaurantName',' Menuid', 'RestaurantSeat')