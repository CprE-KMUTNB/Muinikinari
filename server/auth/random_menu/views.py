from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from random_menu.models import Menu,Restaurant
from random_menu.serializers import MenuSerializer,RestaurantSerializer

from django.core.files.storage import default_storage
from rest_framework.views import APIView
from rest_framework.response import Response
# Create your views here.

@csrf_exempt
class MenuApi(APIView):
    def post(self,request):
        if request.method=='GET':
            Menus = Menus.objects.all()
            Menus_serializer=MenuSerializer(Menus,many=True)
            return JsonResponse(Menus_serializer.data,safe=False)
        elif request.method=='POST':
            Menu_data=JSONParser().parse(request)
            Menus_serializer=MenuSerializer(data=Menu_data)
            if Menus_serializer.is_valid():
                Menus_serializer.save()
                return JsonResponse("Added Successfully",safe=False)
            return JsonResponse("Failed to Add",safe=False)
        elif request.method=='PUT':
            Menu_data=JSONParser().parse(request)
            Menu=Menus.objects.get(Menuid=Menu_data['Menuid'])
            Menus_serializer=MenuSerializer(Menu,data=Menu_data)
            if Menus_serializer.is_valid():
                Menus_serializer.save()
                return JsonResponse("Updated Successfully",safe=False)
            return JsonResponse("Failed to Update")
        elif request.method=='DELETE':
            Menu=Menus.objects.get(Menuid=id)
            Menu.delete()
            return JsonResponse("Deleted Successfully",safe=False)

@csrf_exempt
class RestaurantApi(APIView):
    def post(self,request):
        if request.method=='GET':
            Restaurants = Restaurants.objects.all()
            Restaurants_serializer=RestaurantSerializer(Restaurants,many=True)
            return JsonResponse(Restaurants_serializer.data,safe=False)
        elif request.method=='POST':
            Restaurant_data=JSONParser().parse(request)
            Restaurants_serializer=RestaurantSerializer(data=Restaurant_data)
            if Restaurants_serializer.is_valid():
                Restaurants_serializer.save()
                return JsonResponse("Added Successfully",safe=False)
            return JsonResponse("Failed to Add",safe=False)
        elif request.method=='PUT':
            Restaurant_data=JSONParser().parse(request)
            Restaurant=Restaurants.objects.get(Restaurantid=Restaurant_data['Restaurantid'])
            Restaurants_serializer=RestaurantSerializer(Restaurant,data=Restaurant_data)
            if Restaurants_serializer.is_valid():
                Restaurants_serializer.save()
                return JsonResponse("Updated Successfully",safe=False)
            return JsonResponse("Failed to Update")
        elif request.method=='DELETE':
            Restaurant=Restaurants.objects.get(RestaurantId=id)
            Restaurant.delete()
            return JsonResponse("Deleted Successfully",safe=False)

@csrf_exempt
class SaveFile(APIView):
    def post(self,request):
        file=request.FILES['file']
        file_name=default_storage.save(file.name,file)
        return JsonResponse(file_name,safe=False)