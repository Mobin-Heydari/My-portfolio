from rest_framework import serializers
from .models import BlogCategory, Blog, BlogContent, BlogComment

from Server.settings import ALLOWED_HOSTS





class BlogCategorySerializer(serializers.ModelSerializer):

    image = serializers.SerializerMethodField()

    class Meta:
        model = BlogCategory
        fields = '__all__'

    
    def get_image(self, obj):
        # Convert the image field to a string
        image = str(obj.image)
        
        # Determine the host URL based on ALLOWED_HOSTS
        if ALLOWED_HOSTS == []:
            path_host = "http://127.0.0.1:8000"  # Localhost if no hosts are allowed
        else:
            path_host = ALLOWED_HOSTS[0]  # Use the first allowed host
        
        # Construct the full image URL
        image = f"{path_host}/media/{image}"
        return image  # Return the constructed image URL



class BlogContentSerializer(serializers.ModelSerializer):

    image = serializers.SerializerMethodField()
    video = serializers.SerializerMethodField()

    class Meta:
        model = BlogContent
        fields = '__all__'
        read_only_fields = ['blog']

    
    def get_image(self, obj):
        # Convert the image field to a string
        image = str(obj.image)
        
        # Determine the host URL based on ALLOWED_HOSTS
        if ALLOWED_HOSTS == []:
            path_host = "http://127.0.0.1:8000"  # Localhost if no hosts are allowed
        else:
            path_host = ALLOWED_HOSTS[0]  # Use the first allowed host
        
        # Construct the full image URL
        image = f"{path_host}/media/{image}"
        return image  # Return the constructed image URL
    
    def get_video(self, obj):
        # Convert the video field to a string
        video = str(obj.video)
        
        # Determine the host URL based on ALLOWED_HOSTS
        if ALLOWED_HOSTS == []:
            path_host = "http://127.0.0.1:8000"  # Localhost if no hosts are allowed
        else:
            path_host = ALLOWED_HOSTS[0]  # Use the first allowed host
        
        # Construct the full video URL
        video = f"{path_host}/media/{video}"
        return video  # Return the constructed video URL
        


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

    image = serializers.SerializerMethodField()
    banner = serializers.SerializerMethodField()

    class Meta:
        model = Blog
        fields = '__all__'

    def get_image(self, obj):
        # Convert the image field to a string
        image = str(obj.image)
        
        # Determine the host URL based on ALLOWED_HOSTS
        if ALLOWED_HOSTS == []:
            path_host = "http://127.0.0.1:8000"  # Localhost if no hosts are allowed
        else:
            path_host = ALLOWED_HOSTS[0]  # Use the first allowed host
        
        # Construct the full image URL
        image = f"{path_host}/media/{image}"
        return image  # Return the constructed image URL
    
    def get_banner(self, obj):
        # Convert the banner field to a string
        banner = str(obj.banner)
        
        # Determine the host URL based on ALLOWED_HOSTS
        if ALLOWED_HOSTS == []:
            path_host = "http://127.0.0.1:8000"  # Localhost if no hosts are allowed
        else:
            path_host = ALLOWED_HOSTS[0]  # Use the first allowed host
        
        # Construct the full banner URL
        banner = f"{path_host}/media/{banner}"
        return banner  # Return the constructed banner URL