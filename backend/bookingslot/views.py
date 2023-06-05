from rest_framework import generics
from rest_framework.permissions import AllowAny

from bookingslot.models import BookingSlot
from bookingslot.serializers import BookingSlotSerializer


class BookingSlotListAPIView(generics.ListAPIView):
    """
    List all booking slots
    """
    queryset = BookingSlot.objects.all()
    serializer_class = BookingSlotSerializer
    permission_classes = [AllowAny]


class BookingSlotDetailAPIView(generics.RetrieveAPIView):
    """
    List a booking slot
    """
    queryset = BookingSlot.objects.all()
    serializer_class = BookingSlotSerializer
    permission_classes = [AllowAny]


class BookingSlotUpdateView(generics.UpdateAPIView):
    """
    Update a booking slot
    """
    queryset = BookingSlot.objects.all()
    serializer_class = BookingSlotSerializer


class BookingSlotDeleteView(generics.DestroyAPIView):
    """
    Delete a booking slot
    """
    queryset = BookingSlot.objects.all()
    serializer_class = BookingSlotSerializer
    permission_classes = [AllowAny]
