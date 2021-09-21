from django.urls import path

from bracket.views import ListBracketView

urlpatterns = [
    # list bracket for one tournament
    path('bracket/', ListBracketView.as_view()),
]
