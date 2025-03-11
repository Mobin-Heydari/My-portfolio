from rest_framework import serializers

from .models  import Skills, Category



class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = '__all__'



class SkillsSerializers(serializers.ModelSerializer):

    category = CategorySerializer(read_only=True)

    class Meta:
        model = Skills
        fields = '__all__'