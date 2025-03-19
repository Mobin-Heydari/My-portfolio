from django.shortcuts import get_object_or_404

from rest_framework.views import Response
from rest_framework.viewsets import ViewSet
from rest_framework import status

from .models import Skill, Category
from .serializers import SkillSerializers, CategorySerializer




class CategoryViewSet(ViewSet):
    def list(self, request):
        queryset = Category.objects.all()
        serializer = CategorySerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def retrieve(self, request, slug):
        instance = get_object_or_404(Category, slug=slug)
        serializer = CategorySerializer(instance)
        return Response(serializer.data, status=status.HTTP_200_OK)


class SkillsViewSet(ViewSet):
    def list(self, request):
        queryset = Skill.objects.all()
        serializer = SkillSerializers(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def retrieve(self, request, pk):
        instance = get_object_or_404(Skill, id=pk)
        serializer = SkillSerializers(instance)
        return Response(serializer.data, status=status.HTTP_200_OK)