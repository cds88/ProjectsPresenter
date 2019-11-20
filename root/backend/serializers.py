from rest_framework import serializers
from .models import Project, Image, Cover, Assets 



class CoverSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cover
        fields="__all__"


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model=Image
        fields='__all__'
 

class ProjectSerializer(serializers.ModelSerializer):
    cover = CoverSerializer(many=True, read_only=True)
    images = ImageSerializer(many=True, read_only=True)
    class Meta:
        model = Project
        fields =  '__all__'
        depth = 1


class AssetsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Assets
        fields = "__all__"
       
