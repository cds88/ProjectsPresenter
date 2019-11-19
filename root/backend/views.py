from django.shortcuts import render
from rest_framework import viewsets
from .models import Project, Image, Cover, Assets
from .serializers import ProjectSerializer, ImageSerializer, CoverSerializer, AssetsSerializer
# Create your views here.

class coverViews(viewsets.ModelViewSet):
    queryset= Cover.objects.all()
    serializer_class = CoverSerializer

class projectViews(viewsets.ModelViewSet):
    queryset= Project.objects.all()
    serializer_class = ProjectSerializer


 
class imageViews(viewsets.ModelViewSet):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer



class assetsViews(viewsets.ModelViewSet):
    queryset = Assets.objects.all()
    serializer_class = AssetsSerializer

