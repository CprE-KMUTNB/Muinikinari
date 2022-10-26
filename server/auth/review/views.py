from django.db import router
from rest_framework import viewsets,routers,serializers
from .serializers import ReviewSerializer
from .models import Review

# Create your views here.


class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer


