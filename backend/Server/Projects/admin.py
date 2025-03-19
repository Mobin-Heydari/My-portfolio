from django.contrib import admin
from .models import Project, ProjectDetail


class ProjectDetailInline(admin.TabularInline):  # You can also use admin.StackedInline
    model = ProjectDetail
    extra = 4  # Number of empty forms to display for adding new details


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'project_status', 'is_published', 'published_date', 'created_at', 'updated_at')
    list_filter = ('project_status', 'is_published')
    search_fields = ('title', 'description', 'slug')
    prepopulated_fields = {'slug': ('title',)}
    inlines = [ProjectDetailInline]
