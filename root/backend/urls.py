from django.urls import path, include

from django.conf.urls.static import static
from django.conf import settings
from rest_framework import routers
from .import views 

router = routers.DefaultRouter()
router.register('all', views.projectViews, base_name='dane')
 
 

urlpatterns= router.urls 