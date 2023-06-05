from django.shortcuts import redirect
from rest_framework import generics
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from bookingslot.models import BookingSlot
from booking.models import Booking
from booking.serializers import BookingSerializer


class BookingListAPIView(generics.ListAPIView):
    """
    List all bookings
    """
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer
    permission_classes = [AllowAny]


class BookingDetailAPIView(generics.RetrieveAPIView):
    """
    List a booking
    """
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer
    permission_classes = [AllowAny]


class BookingCreateView(generics.CreateAPIView):
    """
    Create a booking
    """
    model = Booking
    fields = ['event', 'number_of_players', 'slots', 'games']
    serializer_class = BookingSerializer

    def form_valid(self, form):
        booking = form.save(commit=False)
        booking.user = self.request.user
        slots = form.cleaned_data['slots']
        booking.save()

        # Create the bookingslot and link it to the booking
        for slot in slots:
            BookingSlot.objects.create(
                booking=booking,
                slot=slot,
                number_of_players=booking.number_of_players,
            )

        return redirect('booking_detail', pk=booking.pk)


class BookingCancelAPIView(generics.UpdateAPIView):
    """
    Cancel a booking
    """
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer
    permission_classes = [AllowAny]

    def put(self, request, *args, **kwargs):
        booking = self.get_object()
        booking.save()
        return Response({"detail": "Booking has been cancelled."})


class BookingConfirmAPIView(generics.UpdateAPIView):
    """
    Confirm a booking
    """
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer
    permission_classes = [AllowAny]

    def put(self, request, *args, **kwargs):
        booking = self.get_object()
        booking.save()
        return Response({"detail": "Booking has been confirmed."})


class BookingDeclineAPIView(generics.UpdateAPIView):
    """
    Decline a booking
    """
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer
    permission_classes = [AllowAny]

    def put(self, request, *args, **kwargs):
        booking = self.get_object()
        booking.save()
        return Response({"detail": "Booking has been declined."})


class BookingCompleteAPIView(generics.UpdateAPIView):
    """
    Complete a booking
    """
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer
    permission_classes = [AllowAny]

    def put(self, request, *args, **kwargs):
        booking = self.get_object()
        booking.save()
        return Response({"detail": "Booking has been completed."})
