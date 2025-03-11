from rest_framework import serializers

from .models import Contact



class ContactSerializer(serializers.ModelSerializer):

    class Meta:
        model = Contact
        fields = '__all__'

    
    def create(self, validated_data):
        instance = Contact.objects.create(
            title = validated_data['title'],
            content = validated_data['content'],
            name = validated_data['name'],
            phone = validated_data['phone'],
            email = validated_data['email']
        )

        instance.save()

        return instance