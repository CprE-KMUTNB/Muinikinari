from symbol import import_stmt
from rest_framework import serializers,viewsets,routers
from .models import Menu,Restaurant
from .serializers import  MenuSerializer,RestaurantSerializer

class MenuApiView(viewsets.ModelViewSet):
    queryset = Menu.objects.filter(MenuType =  'normal')
    serializer_class = MenuSerializer

class RestaurantApiView(viewsets.ModelViewSet):
    queryset = Restaurant.objects.filter(Menuid = 1)
    serializer_class = RestaurantSerializer

'''router = routers.DefaultRouter()
router.register(r'menu/list',MenuApiView)
router.register(r'Restaurant/list',RestaurantApiView)'''