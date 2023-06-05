from rest_framework import generics
from .models import Game
from .serializers import GameSerializer


class GameListView(generics.ListCreateAPIView):
    """
    List all games
    """
    queryset = Game.objects.all()
    serializer_class = GameSerializer


class GameDetailView(generics.RetrieveUpdateDestroyAPIView):
    """
    List a game
    """
    queryset = Game.objects.all()
    serializer_class = GameSerializer
