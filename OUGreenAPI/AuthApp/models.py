from django.db import models
from django.contrib.auth.models import AbstractUser
from cloudinary.models import CloudinaryField

class User(AbstractUser):
    avatar = CloudinaryField('image')

    class Role(models.TextChoices):
        ADMIN = 'ADMIN', 'Admin'
        EDITOR = 'EDITOR', 'Editor'
        VISITOR = 'VISITOR', 'Visitor'

    role = models.CharField(max_length=10, choices=Role.choices, default=Role.VISITOR)
    def __str__(self):
        return self.username
