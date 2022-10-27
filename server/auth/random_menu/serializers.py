from dataclasses import field
from rest_framework import serializers
#from macpath import join
from random_menu.models import Menu , Restaurant


class RestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = '__all__'
        #field = ('Restaurantid',' RestaurantName',' Menuid', 'RestaurantSeat')

class MenuSerializer(serializers.ModelSerializer):
    RestaurantName = serializers.SerializerMethodField()
    class Meta: 
        model = Menu  
        fields = ( 'Menuid', 'MenuName', 'MenuPrice', 'MenuPic', 'MenuType','RestaurantName')
    def get_RestaurantName(self,obj):
        restaurantname = list(Restaurant.objects.values_list('RestaurantName',flat = True).filter(Menuid=obj.Menuid))

        return restaurantname
