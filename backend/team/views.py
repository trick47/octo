from django.contrib.auth import get_user_model

from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListCreateAPIView

from team.models import Team
from team.serializers.serializers import CreateTeamSerializer, ListTeamSerializer

User = get_user_model()


class ListCreateTeamView(ListCreateAPIView):
    # permission_classes = []
    queryset = Team.objects.all()

    def get_serializer_class(self):
        if self.request.method == 'POST':
            return CreateTeamSerializer
        return ListTeamSerializer

    def perform_create(self, serializer):
        serializer.save(captain=self.request.user)


class RetrieveUpdateDestroyTeamView(RetrieveUpdateDestroyAPIView):
    queryset = Team.objects.all()
    # permission_classes = []
    serializer_class = ListTeamSerializer
    lookup_field = 'pk'
