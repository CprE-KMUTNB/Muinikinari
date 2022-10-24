from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from review.models import Review
from review.serializers import ReviewSerializer

from django.core.files.storage import default_storage
# Create your views here.

@csrf_exempt
def ReviewApi(request,id=0):
    if request.method=='GET':
        Reviews = Reviews.objects.all()
        Reviews_serializer=ReviewSerializer(Reviews,many=True)
        return JsonResponse(Reviews_serializer.data,safe=False)
    elif request.method=='POST':
        Review_data=JSONParser().parse(request)
        Reviews_serializer=ReviewSerializer(data=Review_data)
        if Reviews_serializer.is_valid():
            Reviews_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=='PUT':
        Review_data=JSONParser().parse(request)
        Review=Reviews.objects.get(Reviewid=Review_data['Reviewid'])
        Reviews_serializer=ReviewSerializer(Review,data=Review_data)
        if Reviews_serializer.is_valid():
            Reviews_serializer.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=='DELETE':
        Review=Reviews.objects.get(Reviewid=id)
        Review.delete()
        return JsonResponse("Deleted Successfully",safe=False)


@csrf_exempt
def SaveFile(request):
    file=request.FILES['file']
    file_name=default_storage.save(file.name,file)
    return JsonResponse(file_name,safe=False)