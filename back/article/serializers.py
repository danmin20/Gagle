from rest_framework import serializers
from .models import Article
from rest_framework.serializers import ModelSerializer

class ArticleSerializer(ModelSerializer):
    class Meta:
        model = Article
        fields=[
            'title',
            'content',
            'lat',
            'lng',
            'writer'
        ]
