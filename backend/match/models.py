from django.contrib.auth import get_user_model
from django.db import models
from django.contrib.postgres.fields import ArrayField
from round.models import Round
from team.models import Team

User = get_user_model()


def user_directory_path(instance, filename):
    # image stored MEDIA_ROOT/user_id/filename
    return f'{instance.id}/{filename}'


def result_default(a=0, b=0):
    result = list(f'{a}{b}')
    return result


def mock_default(a=""):
    result = list(a)
    return result


status_choices = [
    ("OG", "On going"),
    ("ED", "Ended"),
]


class Match(models.Model):
    status = models.CharField(max_length=2, choices=status_choices, default="OG")
    result = ArrayField(models.PositiveIntegerField(), size=2, default=result_default, blank=True)
    mock_players = ArrayField(models.JSONField(blank=True), size=2, blank=True, default=mock_default)
    comment = models.CharField(max_length=100, blank=True)
    image = models.ImageField(upload_to=user_directory_path, blank=True, null=True)
    players = models.ManyToManyField(to=User, related_name='matches', blank=True, max_length=2)
    teams = models.ManyToManyField(to=Team, related_name='matches', blank=True)
    round = models.ForeignKey(to=Round, related_name='matches', on_delete=models.CASCADE)
