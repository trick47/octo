from django.urls import path

from team.views import ListCreateTeamView, RetrieveUpdateDestroyTeamView

urlpatterns = [
    # list all teams
    path('list/', ListCreateTeamView.as_view()),

    # Retrieve Update Destroy one Team
    path('<int:pk>/', RetrieveUpdateDestroyTeamView.as_view()),
]
