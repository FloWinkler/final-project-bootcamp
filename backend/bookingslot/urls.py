from django.urls import path

from .views import BookingSlotListAPIView, BookingSlotDetailAPIView, BookingSlotUpdateView, \
    BookingSlotDeleteView

urlpatterns = [
    path('', BookingSlotListAPIView.as_view(), name='bookingslot-list'),
    path('<int:pk>/', BookingSlotDetailAPIView.as_view(), name='bookingslot-detail'),
    path('<int:pk>/update/', BookingSlotUpdateView.as_view(), name='bookingslot-update'),
    path('<int:pk>/delete/', BookingSlotDeleteView.as_view(), name='bookingslot-delete'),
]
