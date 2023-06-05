from rest_framework import serializers
from .models import BookingSlot


class BookingSlotSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookingSlot
        fields = ['id', 'slot', 'booking', 'number_of_players']
