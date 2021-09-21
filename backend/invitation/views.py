from django.core.mail import send_mail
from rest_framework import status
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response

from invitation.models import Invitation
from invitation.serializers.serializers import ListCreateInvitationSerializer
from project.settings import DEFAULT_FROM_EMAIL
from tournament.models import Tournament


class CreateInvitationView(CreateAPIView):

    queryset = Invitation.objects.all
    serializer_class = ListCreateInvitationSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        tour = Tournament.objects.get(id=self.kwargs['id'])
        serializer.save(tournament=tour)
        link = self.kwargs['id']
        send_mail(
            'You have been invited to a tournament on Octo!',
            f'{tour.organizer} has invited you to join. Click on this link to participate in your upcoming challenge: '
            f'https://octo.propulsion-learn.ch/tournament/{link}/overview',
            DEFAULT_FROM_EMAIL,
            [self.request.data['email']],
            fail_silently=False,
        )
        return Response(serializer.data, status=status.HTTP_201_CREATED)
