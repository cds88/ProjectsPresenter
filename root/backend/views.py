from django.shortcuts import render
from rest_framework import viewsets
from .models import Project, Image
from .serializers import ProjectSerializer, ImageSerializer
# Create your views here.


class projectViews(viewsets.ModelViewSet):
    queryset= Project.objects.all()
    serializer_class = ProjectSerializer


 
class imageViews(viewsets.ModelViewSet):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer