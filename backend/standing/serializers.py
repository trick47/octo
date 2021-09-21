from rest_framework import serializers

from standing.models import Standing
from user.serializers.bracket_user_serializer import UserBracketSerializer


class StandingSerializer(serializers.ModelSerializer):
    user = UserBracketSerializer(read_only=True)

    class Meta:
        model = Standing
        fields = "__all__"
