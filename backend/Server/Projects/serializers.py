from rest_framework import serializers
from .models import Project, ProjectDetail, Skill



class SkillSerializer(serializers.ModelSerializer):

    class Meta:
        model = Skill
        fields = "__all__"

class ProjectDetailSerializer(serializers.ModelSerializer):

    class Meta:
        mode = ProjectDetail
        fields = "__all__"



class ProjectSerializer(serializers.ModelSerializer):

    project_details = ProjectDetailSerializer(many=True, read_only=True)
    skills = SkillSerializer(many=True, read_only=True)

    class Meta:
        model = Project
        fields = "__all__"
