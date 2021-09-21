from django.urls import path

from tournament.views import ListTournamentView, CreateTournamentView, RetrieveUpdateDestroyTournamentView, \
    JoinTournamentView

urlpatterns = [
    # list all tournaments
    path('list/', ListTournamentView.as_view()),

    # create tournament
    path('new/', CreateTournamentView.as_view()),

    # Retrieve Update Destroy one tournament
    path('<int:pk>/', RetrieveUpdateDestroyTournamentView.as_view()),

    # Join a specific Tournament
    path('<int:pk>/join/', JoinTournamentView.as_view())
]
