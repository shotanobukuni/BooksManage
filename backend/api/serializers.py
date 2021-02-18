from rest_framework import serializers
from .models import BookModels


class BookSerializer(serializers.ModelSerializer):
    created_at = serializers.DateTimeField(format='%Y-%m-%d %H:%M', read_only=True)
    updated_at = serializers.DateTimeField(format='%Y-%m-%d %H:%M', read_only=True)

    class Meta:
        model = BookModels
        fields = ('title', 'turns', 'created_at', 'updated_at')
