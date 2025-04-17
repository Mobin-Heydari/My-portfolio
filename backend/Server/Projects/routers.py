from django.urls import path, include

from rest_framework import routers

from . import views




class ProjectsRouter(routers.DefaultRouter):
    def __init__(self, *args, **kwargs):
        super().__init__()
        self.register(r'', views.ProjectViewSet, basename='projects')

    

    def get_urls(self):
        custom_urls = [
            path('', include([
                path('', views.ProjectViewSet.as_view({'get': 'list'})),
                path('recent/', views.ProjectViewSet.as_view({'get': 'recent_projects'})),
                path('<slug:slug>/', views.ProjectViewSet.as_view({'get': 'retrieve'})),
            ]))
        ]

        return custom_urls