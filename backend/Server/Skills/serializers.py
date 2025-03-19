from rest_framework import serializers

from .models  import Skill, Category



class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = '__all__'



class SkillSerializers(serializers.ModelSerializer):

    category = CategorySerializer(read_only=True)

    class Meta:
        model = Skill
        fields = '__all__'