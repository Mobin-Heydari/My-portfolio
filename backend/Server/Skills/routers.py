from django.urls import path, include

from rest_framework import routers

from . import views




class CategoryRouter(routers.DefaultRouter):
    def __init__(self, *args, **kwargs):
        super().__init__()
        self.register(r'', views.CategoryViewSet, basename='categories')

    

    def get_urls(self):
        custom_urls = [
            path('', include([
                path('', views.CategoryViewSet.as_view({'get': 'list'})),
                path('<slug:slug>/', views.CategoryViewSet.as_view({'get': 'retrieve'})),
            ]))
        ]

        return custom_urls


class SkillsRouter(routers.DefaultRouter):
    def __init__(self, *args, **kwargs):
        super().__init__()
        self.register(r'', views.SkillsViewSet, basename='skills')

    

    def get_urls(self):
        custom_urls = [
            path('', include([
                path('', views.SkillsViewSet.as_view({'get': 'list'})),
                path('<slug:slug>/', views.SkillsViewSet.as_view({'get': 'retrieve'})),
            ]))
        ]

        return custom_urls