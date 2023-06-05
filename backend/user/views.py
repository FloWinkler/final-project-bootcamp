from rest_framework import generics
from rest_framework_simplejwt.views import TokenObtainPairView

from .models import User
from .serializers import UserSerializer, CustomTokenObtainPairSerializer
from .permissions import IsUserOrReadOnly


class UserList(generics.ListCreateAPIView):
    """
    List all users
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve, update or delete a specific user.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsUserOrReadOnly]


class CustomTokenObtainPairView(TokenObtainPairView):
    """
    API endpoint to retrieve a JWT token for a user.
    """
    serializer_class = CustomTokenObtainPairSerializer
