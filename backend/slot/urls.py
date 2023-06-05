from django.urls import path
from .views import SlotListView, SlotCreateView

urlpatterns = [
    path('<int:center_id>/<str:date>/', SlotListView.as_view(), name='slot-list'),
    # path('<int:pk>/', SlotDetailView.as_view(), name='slot-detail'),
    path('create/', SlotCreateView.as_view(), name='slot-create'),
]
