from django.contrib import admin
from .models import BlogCategory, Blog, BlogContent, BlogComment


class BlogContentInline(admin.TabularInline):  # For inline display of BlogContent
    model = BlogContent
    extra = 1  # Number of empty forms displayed by default


@admin.register(Blog)
class BlogAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'status', 'views', 'likes', 'dislikes', 'created_at', 'updated_at')
    list_filter = ('status', 'category')
    search_fields = ('title', 'content', 'slug')
    prepopulated_fields = {'slug': ('title',)}
    inlines = [BlogContentInline]  # Include BlogContentInline only


@admin.register(BlogCategory)
class BlogCategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug')
    search_fields = ('name',)
    prepopulated_fields = {'slug': ('name',)}


@admin.register(BlogComment)
class BlogCommentAdmin(admin.ModelAdmin):
    list_display = ('blog', 'content', 'created_at', 'updated_at')
    search_fields = ('content',)
