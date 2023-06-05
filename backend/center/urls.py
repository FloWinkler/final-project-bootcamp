from django.urls import path

from center.views import CenterListView, CenterDetailView, CenterCreate

urlpatterns = [
    path('', CenterListView.as_view(), name='center-list'),
    path('<int:pk>/', CenterDetailView.as_view(), name='center-detail'),
    path('create/', CenterCreate.as_view(), name='center-create'),
]
