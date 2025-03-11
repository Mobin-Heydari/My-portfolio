from rest_framework import serializers
from .models import BlogCategory, Blog, BlogContent, BlogComment




class BlogCategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = BlogCategory
        fields = '__all__'



class BlogContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogContent
        fields = '__all__'
        read_only_fields = ['blog']
        


class BlogCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogComment
        fields = '__all__'


    def create(self, validated_data):
        context = self.context

        blog = context['blog']

        instance = BlogComment.objects.create(
            blog = blog,
            content = validated_data['content'],
        )

        instance.save()
        
        return instance


class BlogSerializer(serializers.ModelSerializer):
    category = BlogCategorySerializer(read_only=True)
    blog_content = BlogContentSerializer(many=True, read_only=True)
    comments = BlogCommentSerializer(many=True, read_only=True)

    class Meta:
        model = Blog
        fields = '__all__'