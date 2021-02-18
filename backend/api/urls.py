from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from .views import BookVIewSet

router = routers.DefaultRouter()
router.register('books', BookVIewSet)

urlpatterns = [
    path('', include(router.urls)),
]