from rest_framework import serializers
from review.models import Review

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'
        #field = ( 'Reviewid', 'ReviewComment', 'id', 'name')
