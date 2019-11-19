from django.urls import path, include

from django.conf.urls.static import static
from django.conf import settings
from rest_framework import routers
from .import views 

router = routers.DefaultRouter()
router.register('all', views.projectViews, base_name='dane')

router.register('image', views.imageViews, base_name="images") 
router.register('cover', views.coverViews, base_name="covers")
 

router.register('assets', views.assetsViews, base_name="assets")
urlpatterns= router.urls 