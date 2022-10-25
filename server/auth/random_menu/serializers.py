from dataclasses import field
from rest_framework import serializers
from random_menu.models import Menu , Restaurant

class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = Menu
        fields = '__all__'
        #( 'Menuid', 'MenuName', 'MenuPrice', 'MenuPic', 'MenuType')

class RestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = '__all__'
        #field = ('Restaurantid',' RestaurantName',' Menuid', 'RestaurantSeat')