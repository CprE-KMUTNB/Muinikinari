from itertools import count
from random import randrange
import random
from django.db import router,connection
from rest_framework import viewsets,routers,serializers, filters
from .serializers import MenuSerializer,RestaurantSerializer
from .models import Menu,Restaurant
from rest_framework.response import Response
import random
# Create your views here.

class MenuViewSet(viewsets.ModelViewSet):
        serializer_class = MenuSerializer
        queryset = Menu.objects.all()
        filter_backends = (filters.SearchFilter,)
        search_fields = ('=MenuPrice',)
        numd = 0

        def create(self, request):
            price = request.data
        def get_queryset(self):
                #queryset = Menu.objects.all()
                #queryset = Menu.objects.filter(MenuType = 'normal',MenuPrice__gte = 9 )

                queryset = Menu.objects.raw("SELECT * FROM random_menu_menu m JOIN random_menu_restaurant r ON r.Menuid = m.Menuid WHERE m.MenuPrice > %s AND m.MenuType = %s AND r.RestaurantSeat > %s ORDER BY RAND() LIMIT 1	;",[100,'normal',1])

                return queryset

'''queryset = Menu.objects.all()
    serializer_class = MenuSerializer
    serializer_class.data
        '''

class RestaurantViewSet(viewsets.ModelViewSet):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer

    def get_queryset(self):
                #queryset = Menu.objects.all()
                #queryset = Menu.objects.filter(MenuType = 'normal',MenuPrice__gte = 9 )


                queryset = Restaurant.objects.raw("SELECT * FROM random_menu_restaurant WHERE MenuPrice > %s AND MenuType = %s ORDER BY RAND() LIMIT 1;",[100,'normal'])
                return queryset