from django.shortcuts import get_object_or_404
from rest_framework.views import Response
from rest_framework.viewsets import ViewSet
from rest_framework import status

from .serializers import ContactSerializer
from .models import Contact

class ContactViewSet(ViewSet):

    def list(self, request):
        queryset = Contact.objects.all()
        serializer = ContactSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def retrieve(self, request, pk):
        instance = get_object_or_404(Contact, id=pk)
        serializer = ContactSerializer(instance)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def create(self, request):
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            # Note: Corrected "Massage" to "Message" in the responses.
            return Response({'Message': 'Contact created.'}, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def destroy(self, request, pk):
        instance = get_object_or_404(Contact, id=pk)
        instance.delete()
        return Response({'Message': 'Contact Deleted.'}, status=status.HTTP_204_NO_CONTENT)
