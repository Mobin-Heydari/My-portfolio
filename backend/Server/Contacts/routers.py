from django.urls import path, include

from rest_framework import routers

from . import views




class ContactRouter(routers.DefaultRouter):
    def __init__(self, *args, **kwargs):
        super().__init__()
        self.register(r'', views.ContactViewSet, basename='contacts')

    

    def get_urls(self):
        custom_urls = [
            path('', include([
                path('', views.ContactViewSet.as_view({'get': 'list'})),
                path('', views.ContactViewSet.as_view({'post': 'create'})),
                path('<int:pk>/', views.ContactViewSet.as_view({'get': 'retrieve'})),
                path('<int:pk>/', views.ContactViewSet.as_view({'delete': 'destroy'})),
            ]))
        ]

        return custom_urls