from rest_framework.generics import RetrieveAPIView
from rest_framework.permissions import IsAuthenticated

from bracket.models import Bracket
from bracket.serializers import BracketSerializer


class ListBracketView(RetrieveAPIView):
    serializer_class = BracketSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        tournament_id = self.kwargs["id"]
        return Bracket.objects.get(tournament=tournament_id)
