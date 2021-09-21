from rest_framework import serializers

from match.models import Match
from user.serializers.bracket_user_serializer import UserBracketSerializer


class MatchSerializer(serializers.ModelSerializer):
    players = UserBracketSerializer(many=True, read_only=True)

    class Meta:
        model = Match
        fields = "__all__"
