from django.contrib.auth import get_user_model
from rest_framework.generics import ListAPIView, RetrieveUpdateDestroyAPIView, RetrieveAPIView

from user.serializers.serializers import ListUserSerializer

User = get_user_model()


class UserListView(ListAPIView):
    serializer_class = ListUserSerializer
    # permission_classes =
    queryset = User.objects.all()


class RetrieveUpdateDestroyMyUserView(RetrieveUpdateDestroyAPIView):
    serializer_class = ListUserSerializer
    # permission_classes =

    def get_object(self):
        return self.request.user


class RetrieveUserView(RetrieveAPIView):
    serializer_class = ListUserSerializer
    # permission_classes =
    queryset = User.objects.all()
    lookup_field = 'pk'
