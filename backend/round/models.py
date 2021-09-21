from django.db import models

from bracket.models import Bracket


class Round(models.Model):
    bracket = models.ForeignKey(to=Bracket, related_name='rounds', on_delete=models.CASCADE)
