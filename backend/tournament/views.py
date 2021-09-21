from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListAPIView, CreateAPIView, UpdateAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from bracket.functions import create_bracket, recreate_bracket
from standing.functions import create_standing, recreate_standing
from tournament.models import Tournament
from tournament.serializers.serializers import CreateTournamentSerializer, ListTournamentSerializer

User = get_user_model()


class ListTournamentView(ListAPIView):
    # permission_classes = []
    queryset = Tournament.objects.all()
    serializer_class = ListTournamentSerializer


class CreateTournamentView(CreateAPIView):
    serializer_class = CreateTournamentSerializer
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(organizer=request.user)
        create_bracket(serializer)
        create_standing(serializer)
        return Response(serializer.data)


class RetrieveUpdateDestroyTournamentView(RetrieveUpdateDestroyAPIView):
    queryset = Tournament.objects.all()
    permission_classes = [IsAuthenticated]
    lookup_field = 'pk'

    def get_serializer_class(self):
        if self.request.method == 'PATCH':
            return CreateTournamentSerializer
        return ListTournamentSerializer

    def patch(self, request, *args, **kwargs):
        tournament = self.get_object()
        try:
            if request.data["status"] == tournament.status:
                return Response({"details": f'The status of the tournament is already {tournament.get_status_display()}'})
            recreate_bracket(tournament, request, kwargs)
            recreate_standing(tournament, request, kwargs)
            return self.partial_update(request, *args, **kwargs)
        except KeyError:
            return self.partial_update(request, *args, **kwargs)


class JoinTournamentView(UpdateAPIView):
    queryset = Tournament.objects.all()
    serializer_class = ListTournamentSerializer
    # permission_classes =

    def post(self, request, *args, **kwargs):
        tournament = self.get_object()
        user = self.request.user

        if user not in tournament.participants.all():
            tournament.participants.add(user)
            return Response({'success': 'joined'}, status=status.HTTP_200_OK)
        else:
            tournament.participants.remoce(user)
            return Response({'success': 'quit'}, status=status.HTTP_200_OK)
