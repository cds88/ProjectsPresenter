from django.db import models

# Create your models here.
class Project(models.Model):
    title = models.TextField()
    image = models.ImageField(blank=True)
    textcontent = models.TextField(blank=True)
    url = models.URLField(blank=True)
    

 

 
 

class Image(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, blank=False, null=False, related_name="images")
    image = models.ImageField(blank=False)










 