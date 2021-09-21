from django.db import models

from tournament.models import Tournament


class Bracket(models.Model):
    tournament = models.OneToOneField(to=Tournament, related_name='bracket', on_delete=models.CASCADE)
