from django.db import models




class Category(models.Model):

    name = models.CharField(max_length=255, unique=True)

    slug = models.SlugField(max_length=255, unique=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Category"
        verbose_name_plural = "Categories"
    
    def __str__(self):
        return self.name



class Skill(models.Model):

    category = models.ForeignKey(
        Category,
        on_delete=models.CASCADE,
        related_name="Category_Skill",
    )

    name = models.CharField(max_length=255, unique=True)

    level = models.IntegerField()

    icon = models.FileField(upload_to="Skills/icons")

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Skill"
        verbose_name_plural = "Skills"
    
    def __str__(self):
        return self.name