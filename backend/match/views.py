from rest_framework.generics import RetrieveUpdateAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from match.models import Match
from match.serializers import MatchSerializer
from standing.functions import update_standing


class RetrieveUpdateMatchView(RetrieveUpdateAPIView):
    queryset = Match.objects.all()
    serializer_class = MatchSerializer
    permission_classes = [IsAuthenticated]
    lookup_field = 'pk'

    def patch(self, request, *args, **kwargs):
        match = self.get_object()
        try:
            if match.status == "ED":
                return Response({"details": "The match ended and can't be updated again!"})
            else:
                if match.round.bracket.tournament.format == "RR":
                    if request.data["result"]:
                        update_standing(request, match)
            return self.partial_update(request, *args, **kwargs)
        except KeyError:
            return self.partial_update(request, *args, **kwargs)
