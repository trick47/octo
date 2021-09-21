from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


def user_directory_path(instance, filename):
    # image stored MEDIA_ROOT/user_id/filename
    return f'{instance.id}/{filename}'


class Team(models.Model):
    name = models.CharField(max_length=20, unique=True)
    captain = models.ForeignKey(to=User, related_name='captain_of_teams', on_delete=models.CASCADE, blank=True,
                                null=True)
    players = models.ManyToManyField(to=User, related_name='teams', blank=True)
    picture = models.ImageField(upload_to=user_directory_path, blank=True, null=True)
