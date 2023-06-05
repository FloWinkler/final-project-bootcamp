from django.urls import path

from court import views

urlpatterns = [
    path('', views.CourtList.as_view(), name='court-list'),
    path('<int:pk>/', views.CourtDetail.as_view(), name='court-detail'),
]
