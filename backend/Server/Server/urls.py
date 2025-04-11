from django.contrib import admin
from django.urls import path, include
from . import settings
from django.conf.urls.static import static



urlpatterns = [
    path('admin/', admin.site.urls),
    path('projects/', include('Projects.urls', namespace="Projects")),
    path('blogs/', include('Blogs.urls', namespace="Blogs")),
    path('contacts/', include('Contacts.urls', namespace="Contacts")),
    path('skills/', include('Skills.urls', namespace="Skills")),
]   + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
