from django.contrib import admin
from .models import Contact


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ('title', 'name', 'phone', 'email')
    search_fields = ('title', 'content', 'name', 'email', 'phone')
    list_filter = ('email',)  # Optional: Add filtering for specific fields
