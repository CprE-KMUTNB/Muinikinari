from rest_framework import serializers
from random_menu.models import Review

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        field = ( 'Reviewid', 'ReviewComment', 'id', 'name')
