from rest_framework import serializers
from tournament.models import Tournament


class ListTournamentSerializer(serializers.ModelSerializer):
    format = serializers.CharField(source='get_format_display')
    sport = serializers.CharField(source='get_sport_display')
    status = serializers.CharField(source='get_status_display')

    class Meta:
        model = Tournament
        fields = '__all__'


class CreateTournamentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tournament
        fields = '__all__'
        read_only_field = ['organizer']
