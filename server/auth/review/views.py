from django.db import router
from rest_framework import viewsets,routers,serializers
from .serializers import ReviewSerializer,RecommendSerializer
from .models import Review,Reccommend

# Create your views here.


class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
#http://127.0.0.1:8000/apireview/review/id/delete

class RecommendViewSet(viewsets.ModelViewSet):
    queryset = Reccommend.objects.all()
    serializer_class = RecommendSerializer
    def get_queryset(self):

        queryset = Reccommend.objects.all()

        return queryset

    def create(self, request, *args, **kwargs):

        return super().create(request, *args, **kwargs)

    def update(self, request, *args, **kwargs):

        return super().update(request, *args, **kwargs)

    def destroy(self, request, *args, **kwargs):

        return super().destroy(request, *args, **kwargs)


        


