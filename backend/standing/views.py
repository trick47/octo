from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticated

from standing.models import Standing
from standing.serializers import StandingSerializer


class ListStandingView(ListAPIView):
    serializer_class = StandingSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Standing.objects.filter(tournament=self.kwargs["id"]).order_by("-score_diff", "-points")
