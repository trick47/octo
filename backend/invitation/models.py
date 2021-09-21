from django.db import models
from tournament.models import Tournament


class Invitation(models.Model):
    email = models.EmailField()
    status = models.CharField(max_length=1, choices=[('O', 'open'), ('A', 'accepted'), ('D', 'declined')], default='O')
    is_used = models.BooleanField(default=False)
    tournament = models.ForeignKey(to=Tournament, related_name='invitations', on_delete=models.PROTECT)
