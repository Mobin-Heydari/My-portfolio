from django.urls import path, include

from .routers import ContactRouter


app_name = "Contacts"

contacts_router = ContactRouter()

urlpatterns = [
    path('', include(contacts_router.get_urls())),
]