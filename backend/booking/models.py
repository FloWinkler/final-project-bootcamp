from django.db import models
from django.core.validators import MinValueValidator

from event.models import Event

from django.contrib.auth import get_user_model

User = get_user_model()


def get_first_center():
    from center.models import Center
    return Center.objects.first()


class Booking(models.Model):

    booking_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    center = models.ForeignKey('center.Center', on_delete=models.CASCADE, default=get_first_center, related_name='bookings')
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    number_of_players = models.PositiveSmallIntegerField(validators=[MinValueValidator(1)])

    def __str__(self):
        return f"{self.booking_id} - {self.event.event_title} - {self.center.center_name}"
