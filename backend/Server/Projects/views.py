from django.shortcuts import get_object_or_404

from rest_framework.viewsets import ViewSet
from rest_framework import status
from rest_framework.response import Response

from .models import Project
from .serializers import ProjectSerializer



class ProjectViewSet(ViewSet):
    """
    A viewset for projects
    """

    # list of projects 
    def list(self, request):
        # getting the querysets
        queryset = Project.objects.all()
        # defining and calling our serializer
        serializer = ProjectSerializer(queryset, many=True)
        # returning the serialized data
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    # detail of a project
    def retrieve(self, request, slug):
        # geting the query
        query = get_object_or_404(Project, slug=slug)
        # serializing the query
        serializer = ProjectSerializer(query)
        # returning the serialized data
        return Response(serializer.data, status=status.HTTP_200_OK)