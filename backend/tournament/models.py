from django.db import models
from django.contrib.auth import get_user_model

from team.models import Team

User = get_user_model()


def user_directory_path(instance, filename):
    # image stored MEDIA_ROOT/user_id/filename
    return f'{instance.id}/{filename}'


format_choices = [
    ("SE", "Single elimination"),
    ("RR", "Round robin"),
    ("MX", "Mixed"),
]

status_choices = [
    ("BS", "Before start"),
    ("OG", "On going"),
    ("ED", "Finished"),
]

sport_choices = [
    ("F", "Football"),
    ("T", "Tennis"),
    ("P", "Ping pong"),
]


class Tournament(models.Model):
    name = models.CharField(max_length=40, unique=True)
    description = models.TextField()
    location = models.CharField(max_length=100, default="Zurich")
    no_of_players = models.PositiveIntegerField(default=2)
    format = models.CharField(max_length=2, choices=format_choices)
    private = models.BooleanField(default=False)
    team_type = models.BooleanField(default=False)
    status = models.CharField(max_length=2, choices=status_choices, default="BS")
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    picture = models.ImageField(upload_to=user_directory_path, blank=True, null=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    latitude = models.FloatField(blank=True, default=47.36667)
    longitude = models.FloatField(blank=True, default=8.5417)
    sport = models.CharField(max_length=1, choices=sport_choices)
    settings = models.TextField(blank=True)
    organizer = models.ForeignKey(to=User, related_name='my_tournaments', on_delete=models.CASCADE, blank=True, null=True)
    participants = models.ManyToManyField(to=User, related_name='part_in_tournaments', blank=True)
    teams = models.ManyToManyField(to=Team, related_name='tournaments', blank=True)
