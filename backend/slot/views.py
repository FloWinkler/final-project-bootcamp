from django.db.models import Sum
from rest_framework import generics
from datetime import datetime, timedelta
from booking.models import Booking
from .models import Slot
from center.models import Center
from .serializers import SlotSerializer


class SlotListView(generics.ListAPIView):
    """
    Get all available slots for the given center and date
    """
    serializer_class = SlotSerializer

    def get_queryset(self):
        center_id = self.kwargs.get('center_id')
        date_str = self.kwargs.get('date')
        if not date_str:
            return []
        date = datetime.strptime(date_str, '%Y-%m-%d').date()

        try:
            center = Center.objects.get(pk=center_id)
        except Center.DoesNotExist:
            return []

        available_slots = []
        for slot in center.available_slots(date):
            if not slot:
                continue

            if center.max_capacity:
                bookings = Booking.objects.filter(bookingslot__slot__start_time=slot['start_time']).aggregate(Sum('number_of_players'))[
                    'number_of_players__sum']
                available_capacity = center.max_capacity - (bookings or 0)
                if available_capacity <= 0:
                    continue
                slot['available_slots'] = available_capacity
            else:
                slot['available_slots'] = 1

            slot['center_name'] = center.center_name
            slot['event_title'] = None

            available_slots.append(slot)

        return available_slots


class SlotCreateView(generics.CreateAPIView):
    """
    Create a slot
    """
    serializer_class = SlotSerializer
    queryset = Slot.objects.all()
    fields = ('event', 'start_time', 'end_time')

    def perform_create(self, serializer):
        """
        Set the start and end time for the new slot based on the event's start time and duration.
        """
        event = serializer.validated_data['event']
        center = event.center
        slots_to_create = event.slots_needed

        # get the last slot end time for the given event
        last_slot = center.slots.filter(event=event).last()
        start_time = last_slot.end_time if last_slot else event.event_start_time

        # create new slots
        for _ in range(slots_to_create):
            slot = serializer.save()
            slot.start_time = start_time
            slot.end_time = start_time + timedelta(minutes=event.event_duration_minutes)
            slot.save()
            start_time = slot.end_time
