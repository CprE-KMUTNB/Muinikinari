from symbol import import_stmt
from rest_framework import serializers,viewsets,routers
from .models import Review
from .serializers import  ReviewSerializer

class ReviewApiView(viewsets.ModelViewSet):
    queryset = Review.objects.filter(id = 1)
    serializer_class = ReviewSerializer


router = routers.DefaultRouter()
router.register(r'Review/list',ReviewApiView)