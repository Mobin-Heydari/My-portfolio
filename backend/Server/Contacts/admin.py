from django.contrib import admin
from .models import Contact

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = (
        'title',
        'f_name',
        'l_name',
        'phone',
        'email',
        'status',
        'created_at'
    )
    search_fields = (
        'title', 
        'content', 
        'f_name', 
        'l_name', 
        'email', 
        'phone', 
        'linkedin_id'
    )
    list_filter = (
        'status',      # Filter by contact status (New, In Progress, etc.)
        'created_at',  # Filter by creation date
        'is_readed',   # Filter by whether the contact has been read
        'is_ignored'   # Filter by ignore flag
    )
    ordering = ('-created_at',)
    readonly_fields = ('created_at', 'updated_at')
