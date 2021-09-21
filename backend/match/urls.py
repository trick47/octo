from django.urls import path

from match.views import RetrieveUpdateMatchView

urlpatterns = [
    # retrieve and update Match
    path('<int:pk>/', RetrieveUpdateMatchView.as_view()),
]
