from django.db import models

class BookModels(models.Model):
    title = models.CharField(max_length=100)
    turns = models.IntegerField()
