from rest_framework import serializers
from team.models import Team


class ListTeamSerializer(serializers.ModelSerializer):

    class Meta:
        model = Team
        fields = '__all__'


class CreateTeamSerializer(serializers.ModelSerializer):

    class Meta:
        model = Team
        fields = '__all__'
        read_only_field = ['captain']
