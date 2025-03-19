from django.db import models




class Project(models.Model):

    class ProjectStatus(models.TextChoices):
        PENDING = 'Pending'
        STARTED = 'Started'
        IN_PROGRESS = 'In Progress'
        FNISHED = 'Fnished'
        PUBLISHED = 'Published'

    title = models.CharField(max_length=255, unique=True)
    slug = models.SlugField(max_length=255, unique=True)

    description = models.TextField(max_length=300, null=True, blank=True)

    image = models.ImageField(upload_to='projects/images/', null=True)
    banner = models.ImageField(upload_to='projects/banners/', null=True)
    video = models.FileField(upload_to='projects/videos/', null=True)

    project_status = models.CharField(max_length=12, choices=ProjectStatus.choices, default=ProjectStatus.IN_PROGRESS)

    is_published = models.BooleanField(default=False)
    published_date = models.DateField(null=True)

    github = models.URLField(null=True, blank=True)
    main_url = models.URLField(null=True, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Project"
        verbose_name_plural = "Projects"
    
    def __str__(self):
        return self.title
    

class ProjectDetail(models.Model): 
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name="Project_Detail")

    title = models.CharField(max_length=255, blank=True, null=True)

    content = models.TextField(null=True, blank=True)

    image = models.ImageField(upload_to="projects/details/images/", null=True, blank=True)

    video = models.FileField(upload_to="projects/details/videos/", null=True, blank=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Project Detail"
        verbose_name_plural = "Projects Details"

    def __str__(self):
        return f'{self.project.title}'
