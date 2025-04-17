from django.db import models


class Contact(models.Model):
    # Define status options for managing inquiry progress
    class ContactStatusChoices(models.TextChoices):
        NEW = 'NEW', 'New'
        IN_PROGRESS = 'INP', 'In Progress'
        COMPLETED = 'COM', 'Completed'
        ARCHIVED = 'ARC', 'Archived'


    # Basic contact fields
    title = models.CharField(max_length=255)
    content = models.TextField()
    f_name = models.CharField(max_length=255)
    l_name = models.CharField(max_length=255)
    phone = models.CharField(max_length=255, blank=True)
    email = models.EmailField()
    linkedin_id = models.CharField(max_length=255, blank=True)

    # Workflow and metadata fields
    status = models.CharField(
        max_length=3, 
        choices=ContactStatusChoices.choices, 
        default=ContactStatusChoices.NEW,
        help_text="Current status of the contact inquiry."
    )

    # Additional contextual fields
    ip_address = models.GenericIPAddressField(
        null=True, 
        blank=True,
        help_text="Capture the visitor's IP address for security or analytics."
    )

    user_agent = models.CharField(
        max_length=512, 
        blank=True, 
        null=True,
        help_text="Record the browser's user agent for device information."
    )

    attachment = models.FileField(
        upload_to='contact_attachments/', 
        blank=True, 
        null=True,
        help_text="Optional file attachment (e.g., resume, portfolio)."
    )

    # Timestamps for record keeping
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    # Read and ignore flags for interface management
    is_ignored = models.BooleanField(default=True)
    is_readed = models.BooleanField(default=False)

    class Meta:
        verbose_name = 'Contact'
        verbose_name_plural = 'Contacts'
        ordering = ['-created_at']  # Most recent contacts first

    def __str__(self):
        return f"{self.title} - {self.name}"
