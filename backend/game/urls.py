from django.urls import path

from game.views import GameDetailView, GameListView

urlpatterns = [
    path('', GameListView.as_view(), name='game-list'),
    path('<int:pk>/', GameDetailView.as_view(), name='game-detail'),
]
