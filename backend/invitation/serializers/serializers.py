from rest_framework import serializers
from invitation.models import Invitation


class ListCreateInvitationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Invitation
        fields = '__all__'
