from django.core.validators import MinValueValidator
from django.db import models

from booking.models import Booking
from slot.models import Slot


class BookingSlot(models.Model):

    slot = models.ForeignKey(Slot, on_delete=models.CASCADE)
    booking = models.ForeignKey(Booking, on_delete=models.CASCADE)
    number_of_players = models.PositiveSmallIntegerField(validators=[MinValueValidator(1)])

    def __str__(self):
        return f"{self.booking.booking_id} - {self.slot.start_time}"
