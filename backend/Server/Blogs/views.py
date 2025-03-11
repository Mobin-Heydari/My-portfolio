from django.shortcuts import get_object_or_404

from rest_framework.views import APIView, Response
from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework import status

from . import serializers, models



class BlogViewSet(ModelViewSet):
    queryset = models.Blog.objects.all()
    serializer_class = serializers.BlogSerializer
    lookup_field = 'slug'


    def list(self, request, *args, **kwargs):
        instance = self.get_queryset()
        serializer = self.get_serializer(instance, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def retrieve(self, request, slug, *args, **kwargs):
        instance = get_object_or_404(models.Blog, slug=slug)
        serializer = self.get_serializer(instance)
        return Response(serializer.data, status=status.HTTP_200_OK)
    


class AddComentAPIView(APIView):
    def post(self, request, slug):
        blog = get_object_or_404(models.Blog, slug=slug)
        serializer = serializers.BlogCommentSerializer(data=request.data, context={'blog': blog})
        if serializer.is_valid():
            serializer.save()
            return Response({'Massage': 'Comment created.'}, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)