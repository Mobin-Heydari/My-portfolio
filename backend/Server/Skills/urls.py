from django.urls import path, include
from .routers import CategoryRouter, SkillsRouter



app_name = "Skills"


categories_router = CategoryRouter()
skills_router = SkillsRouter()


urlpatterns = [
    path('skills/', include(categories_router.get_urls())),
    path('categories/', include(skills_router.get_urls())),
]