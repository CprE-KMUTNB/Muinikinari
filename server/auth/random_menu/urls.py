from django import views
from django.urls import path,include
from rest_framework import serializers,viewsets,routers
from . import views
from rest_framework.routers import DefaultRouter
#from .views import 
#from django.conf.urls import url
from random_menu.views import  MenuViewSet , RestaurantViewSet

from django.conf.urls.static import static
from django.conf import settings


router = routers.DefaultRouter()
router.register('menu', views.MenuViewSet, 'menu')
router.register('menuveg', views.MenuViewSet2, 'menu')
router.register('menudiet', views.MenuViewSet3, 'menu')
router.register('menucarni', views.MenuViewSet4, 'menu')
router.register('restaurant', views.RestaurantViewSet, 'restaurant')

urlpatterns = [

    path('', include(router.urls))
  
] +static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)


'''router = routers.DefaultRouter()
router.register(r'menu/list',MenuApiView)
router.register(r'Restaurant/list',RestaurantApiView)'''