from django.shortcuts import get_object_or_404

from rest_framework.views import APIView, Response
from rest_framework.viewsets import ViewSet
from rest_framework import status

from . import serializers
from .models import Blog



class BlogViewSet(ViewSet):
    lookup_field = 'slug'


    def list(self, request, *args, **kwargs):
        instance = Blog.objects.all()
        serializer = serializers.BlogSerializer(instance, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def retrieve(self, request, slug, *args, **kwargs):
        instance = get_object_or_404(Blog, slug=slug)
        serializer = serializers.BlogSerializer(instance)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def famus_blogs(self, request):
        queryset = Blog.objects.filter(status='PUB').order_by('views')[:6]
        serializer = serializers.BlogSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    


class AddComentAPIView(APIView):
    def post(self, request, slug):
        blog = get_object_or_404(Blog, slug=slug)
        serializer = serializers.BlogCommentSerializer(data=request.data, context={'blog': blog})
        if serializer.is_valid():
            serializer.save()
            return Response({'Massage': 'Comment created.'}, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)