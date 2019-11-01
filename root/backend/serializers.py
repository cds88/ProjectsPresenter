from rest_framework import serializers
from .models import Project, Image



class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model=Image
        fields='__all__'
 

class ProjectSerializer(serializers.ModelSerializer):
    images = ImageSerializer(many=True, read_only=True)
    

    class Meta:
        model = Project
        fields =  '__all__'
        depth = 1
