from django.shortcuts import render
from .models import BookModels
from rest_framework import viewsets
from .serializers import BookSerializer


class BookVIewSet(viewsets.ModelViewSet):
    serializer_class = BookSerializer
    queryset = BookModels.objects.all()



