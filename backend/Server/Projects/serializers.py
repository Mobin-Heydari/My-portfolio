from rest_framework import serializers
from .models import Project, ProjectDetail, Skill

from Server.settings import ALLOWED_HOSTS



class SkillSerializer(serializers.ModelSerializer):

    icon = serializers.SerializerMethodField()

    class Meta:
        model = Skill
        fields = "__all__"

    
    def get_icon(self, obj):
        # Convert the icon field to a string
        icon = str(obj.icon)
        
        # Determine the host URL based on ALLOWED_HOSTS
        if ALLOWED_HOSTS == []:
            path_host = "http://127.0.0.1:8000"  # Localhost if no hosts are allowed
        else:
            path_host = ALLOWED_HOSTS[0]  # Use the first allowed host
        
        # Construct the full icon URL
        icon = f"{path_host}/media/{icon}"
        return icon  # Return the constructed icon URL

class ProjectDetailSerializer(serializers.ModelSerializer):

    class Meta:
        mode = ProjectDetail
        fields = "__all__"



class ProjectSerializer(serializers.ModelSerializer):

    project_details = ProjectDetailSerializer(many=True, read_only=True)
    skills = SkillSerializer(many=True, read_only=True)

    image = serializers.SerializerMethodField()
    banner = serializers.SerializerMethodField()
    video = serializers.SerializerMethodField()


    class Meta:
        model = Project
        fields = "__all__"
        


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