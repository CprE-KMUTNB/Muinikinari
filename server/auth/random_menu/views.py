from django.db import router
from rest_framework import viewsets,routers,serializers
from .serializers import MenuSerializer,RestaurantSerializer
from .models import Menu,Restaurant
from rest_framework.response import Response

# Create your views here.

class MenuViewSet(viewsets.ModelViewSet):
    queryset = Menu.objects.filter(Menuid = 1)
    serializer_class = MenuSerializer

        



class RestaurantViewSet(viewsets.ModelViewSet):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer

