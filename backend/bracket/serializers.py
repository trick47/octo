from rest_framework import serializers

from bracket.models import Bracket
from round.models import Round
from round.serializers import RoundSerializer


class BracketSerializer(serializers.ModelSerializer):
    rounds = serializers.SerializerMethodField(read_only=True)

    def get_rounds(self, obj):
        rounds = Round.objects.filter(bracket_id=obj.id).order_by("id")
        return RoundSerializer(rounds, many=True).data

    class Meta:
        model = Bracket
        fields = ["id", "tournament", "rounds"]
        read_only_fields = ["rounds"]
