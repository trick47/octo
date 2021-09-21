from django.urls import path

from standing.views import ListStandingView

urlpatterns = [
    # retrieve and update Match
    path('standing/', ListStandingView.as_view()),
]
