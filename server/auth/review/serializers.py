from rest_framework import serializers
#from auth.review.models import Reccommend
from review.models import Review,Reccommend


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ( 'Reviewid', 'ReviewComment')
        #field = ( 'Reviewid', 'ReviewComment', 'id', 'name')

class RecommendSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reccommend
        fields = '__all__'
