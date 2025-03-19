from django.contrib import admin
from .models import Category, Skill


class SkillInline(admin.TabularInline):  # Use TabularInline for compact view
    model = Skill
    extra = 1  # Number of empty forms displayed by default


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug', 'created_at', 'updated_at')
    search_fields = ('name', 'slug')
    prepopulated_fields = {'slug': ('name',)}
    inlines = [SkillInline]  # Add inline for managing skills under categories


@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'level', 'created_at', 'updated_at')
    list_filter = ('category', 'level')
    search_fields = ('name', 'category__name')  # Enable search by skill and category name
