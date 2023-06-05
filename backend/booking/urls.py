from django.urls import path

from .views import BookingListAPIView, BookingDetailAPIView, BookingCancelAPIView, BookingConfirmAPIView, \
    BookingDeclineAPIView, BookingCompleteAPIView, BookingCreateView

urlpatterns = [
    path('', BookingListAPIView.as_view(), name='booking-list'),
    path('<int:pk>/', BookingDetailAPIView.as_view(), name='booking-detail'),
    path('<int:pk>/cancel/', BookingCancelAPIView.as_view(), name='booking-cancel'),
    path('<int:pk>/confirm/', BookingConfirmAPIView.as_view(), name='booking-confirm'),
    path('<int:pk>/decline/', BookingDeclineAPIView.as_view(), name='booking-decline'),
    path('<int:pk>/complete/', BookingCompleteAPIView.as_view(), name='booking-complete'),
    path('create/', BookingCreateView.as_view(), name='booking-create'),
]
