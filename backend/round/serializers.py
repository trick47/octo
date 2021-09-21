from rest_framework import serializers

from match.models import Match
from match.serializers import MatchSerializer
from round.models import Round


class RoundSerializer(serializers.ModelSerializer):
    matches = serializers.SerializerMethodField(read_only=True)

    def get_matches(self, obj):
        matches = Match.objects.filter(round_id=obj.id).order_by("id")
        return MatchSerializer(matches, many=True).data

    class Meta:
        model = Round
        fields = ["id", "matches"]
