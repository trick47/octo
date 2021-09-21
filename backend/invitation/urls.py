from django.urls import path

from invitation.views import CreateInvitationView

urlpatterns = [
    # list all tournaments
    path('tournament/<int:id>/', CreateInvitationView.as_view()),
]
