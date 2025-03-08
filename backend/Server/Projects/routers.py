from django.urls import path, include

from rest_framework import routers

from . import views




class ProjectsRouter(routers.DefaultRouter):
    def __init__(self, *args, **kwargs):
        super().__init__()
        self.register(r'', views.BlogViewSet, basename='projects')

    

    def get_urls(self):
        custom_urls = [
            path('', include([
                path('', views.BlogViewSet.as_view({'get': 'list'})),
                path('<slug:slug>/', views.BlogViewSet.as_view({'get': 'retrieve'})),
            ]))
        ]

        return custom_urls