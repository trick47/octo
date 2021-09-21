from standing.models import Standing
from standing.serializers import StandingSerializer


# flake8: noqa: C901
def create_standing(serializer):
    participants = []
    for i in range(0, serializer.data["no_of_players"]):
        participants.append({"first_name": "Player", "last_name": i + 1})
    if serializer.data["format"] == "RR":
        for i in range(0, len(participants)):
            standing_data = {"tournament": serializer.data["id"], "mock_user": participants[i]}
            standing_serializer = StandingSerializer(data=standing_data)
            standing_serializer.is_valid(raise_exception=True)
            standing_serializer.save()


# flake8: noqa: C901
def recreate_standing(tournament, request, kwargs):
    participants = tournament.participants.all()
    if request.data["status"] == "OG":
        if tournament.format == "RR":
            standing = Standing.objects.filter(tournament=kwargs["pk"])
            standing.delete()
            for i in range(0, len(participants)):
                standing_data = {"tournament": tournament.id}
                standing_serializer = StandingSerializer(data=standing_data)
                standing_serializer.is_valid(raise_exception=True)
                standing_serializer.save(user=participants[i])


# flake8: noqa: C901
def update_standing(request, match):
    standing_player0 = Standing.objects.get(tournament=match.round.bracket.tournament, user=match.players.all()[0])
    standing_player1 = Standing.objects.get(tournament=match.round.bracket.tournament, user=match.players.all()[1])
    standing_player0.matches_played += 1
    standing_player1.matches_played += 1
    if request.data["result"][0] > request.data["result"][1]:
        standing_player0.wins += 1
        standing_player1.loses += 1
        standing_player0.points += 3
    elif request.data["result"][0] < request.data["result"][1]:
        standing_player0.loses += 1
        standing_player1.wins += 1
        standing_player1.points += 3
    else:
        standing_player0.draws += 1
        standing_player1.draws += 1
        standing_player0.points += 1
        standing_player1.points += 1
    standing_player0.score_for += request.data["result"][0]
    standing_player1.score_for += request.data["result"][1]
    standing_player0.score_against += request.data["result"][1]
    standing_player1.score_against += request.data["result"][0]
    standing_player0.score_diff += (request.data["result"][0] - request.data["result"][1])
    standing_player1.score_diff += (request.data["result"][1] - request.data["result"][0])
    standing_player0.save()
    standing_player1.save()
