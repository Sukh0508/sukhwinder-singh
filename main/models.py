from django.db import models

# Create your models here.

class Experience(models.Model):
    company = models.CharField(max_length=100)
    role = models.CharField(max_length=100)
    duration = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return (self.company)
    
class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    tech = models.CharField(max_length=200)
    live_demo = models.URLField()
    image = models.ImageField(upload_to='project')

    def __str__(self):
        return (self.title) 

class About(models.Model):
    image = models.ImageField(upload_to='about/',null=True,blank=True)

class Homeimg(models.Model):
    image = models.ImageField(upload_to='homeimg/',null=True,blank=True)

class Skills(models.Model):
    Skill = models.CharField(max_length=100)
    icon = models.CharField(max_length=100)

    def __str__(self):
        return (self.Skill)
    
class Services(models.Model):
    service = models.CharField(max_length=100)
    icon = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return (self.service)

class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    subject = models.CharField(max_length=100)
    message = models.TextField(max_length=200)
    phone = models.CharField(max_length=100,blank=True,null=True)

    def __str__(self):
        return (self.name)

class Email(models.Model):
    email = models.CharField(max_length=100)