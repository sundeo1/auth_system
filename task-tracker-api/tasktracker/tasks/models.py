from django.db import models

class Task(models.Model):
    text = models.CharField(max_length=500)
    # day = models.DateTimeField()
    day = models.CharField(max_length=50, blank=False)
    reminder = models.BooleanField(default= True)
