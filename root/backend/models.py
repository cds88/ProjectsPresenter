from django.db import models


class Project(models.Model):
    title = models.TextField()
    image = models.ImageField(blank=True)
    textcontent = models.TextField(blank=True)
    url = models.URLField(blank=True)

    

class Cover(models.Model):
    project = models.ForeignKey(Project, on_delete =models.CASCADE, blank= False, null=False, related_name="cover")
    cover = models.ImageField(blank=False)
    
 

class Image(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, blank=False, null=False, related_name="images")
    image = models.ImageField(blank=False)


class Assets(models.Model):
    mail = models.TextField(default="kenshin30@wp.pl")
    mailLogo= models.ImageField(blank=False)
    git = models.URLField(default="https://www.github.com/cds88")
    gitLogo = models.ImageField(blank=False)


 
 