from django import views
from django.urls import path
#from .views import 
#from django.conf.urls import url
from review.views import ReviewApi,SaveFile

from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('review',ReviewApi.as_view()),
    path('savefile',SaveFile.as_view()),
   
    
    
    '''url(r'^review$',views.ReviewApi),
    url(r'^review/([0-9]+)$',views.ReviewApi),

    url(r'^review/savefile',views.SaveFile),'''
  
] +static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)