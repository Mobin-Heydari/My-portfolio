from django.db import models



class Contact(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    name = models.CharField(max_length=255)
    phone = models.CharField(max_length=255)
    email = models.EmailField()

    class Meta:
        verbose_name = 'Contact'
        verbose_name_plural = 'Contacts'
    
    def __str__(self):
        return self.title