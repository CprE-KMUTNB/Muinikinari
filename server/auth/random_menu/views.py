from random import randrange
import random
from django.db import router
from rest_framework import viewsets,routers,serializers
from .serializers import MenuSerializer,RestaurantSerializer
from .models import Menu,Restaurant
from rest_framework.response import Response
import random
# Create your views here.

class MenuViewSet(viewsets.ModelViewSet):
    numrand = random.randrange(1, 10, 1)
    queryset = Menu.objects.filter(Menuid = numrand)
    serializer_class = MenuSerializer

        



class RestaurantViewSet(viewsets.ModelViewSet):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer

