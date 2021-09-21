from django.urls import path

from user.views import UserListView, RetrieveUpdateDestroyMyUserView, RetrieveUserView

urlpatterns = [
    # list all users
    path('list/', UserListView.as_view()),

    # my user
    path('me/', RetrieveUpdateDestroyMyUserView.as_view()),

    # any user
    path('<int:pk>/', RetrieveUserView.as_view()),
]
