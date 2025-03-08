from django.urls import path, include
from .routers import ProjectsRouter



app_name = "Projects"

project_router = ProjectsRouter()

urlpatterns = [
    path('', include(project_router.get_urls())),
]