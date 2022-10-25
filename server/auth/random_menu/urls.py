from django import views
from django.urls import path
#from .views import 
#from django.conf.urls import url
from random_menu.views import MenuApi,RestaurantApi,SaveFile

from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('menu',MenuApi.as_view()),
    path('restaurant',RestaurantApi.as_view()),
    path('savefile',SaveFile.as_view()),


    '''url(r'^menu$',views.MenuApi),
    url(r'^restaurant/([0-9]+)$',views.RestaurantApi),
    url(r'^restaurant$',views.RestaurantApi),

    url(r'^menu$',views.MenuApi),
    url(r'^menu/([0-9]+)$',views.MenuApi),

    url(r'^random/savefile',views.SaveFile),'''
  
] +static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)