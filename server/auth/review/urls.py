from django import views
from django.urls import path,include
from rest_framework import serializers,viewsets,routers
from . import views
from rest_framework.routers import DefaultRouter
#from .views import 
#from django.conf.urls import url
from review.views import ReviewViewSet

from django.conf.urls.static import static
from django.conf import settings

router = routers.DefaultRouter()
router.register('review', views.ReviewViewSet, 'review')
router.register('recommend', views.RecommendViewSet, 'recommend')

urlpatterns = [

    path('', include(router.urls))
  
] +static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)


'''router = routers.DefaultRouter()
router.register(r'Review/list',ReviewViewSet)'''