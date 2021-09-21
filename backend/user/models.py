from django.contrib.auth.models import AbstractUser
from django.db import models


def user_directory_path(instance, filename):
    # image stored MEDIA_ROOT/user_id/filename
    return f'{instance.id}/{filename}'


class User(AbstractUser):
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    email = models.EmailField(unique=True)
    username = models.CharField(unique=True, max_length=50, blank=True)
    first_name = models.CharField(max_length=30, blank=True)
    last_name = models.CharField(max_length=30, blank=True)
    company = models.CharField(max_length=50, blank=True)
    location = models.CharField(max_length=50, blank=True, default="")
    avatar = models.ImageField(upload_to=user_directory_path, blank=True, null=True)
    banner = models.ImageField(upload_to=user_directory_path, blank=True, null=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
