from datetime import datetime, timedelta

from django.db.models import Sum
from django.utils import timezone
from django.db import models


class Center(models.Model):
    center_id = models.AutoField(primary_key=True)
    center_name = models.CharField(max_length=100)
    center_address = models.CharField(max_length=100)
    center_country = models.CharField(max_length=100)
    center_city = models.CharField(max_length=100)
    center_zip = models.CharField(max_length=100)
    center_phone = models.CharField(max_length=100)
    center_email = models.CharField(max_length=100)
    center_website = models.CharField(max_length=100)
    center_image = models.ImageField(upload_to='center_images', blank=True, null=True)
    opening_time = models.TimeField()
    closing_time = models.TimeField()
    max_capacity = models.IntegerField()

    def __str__(self):
        return f'{self.center_id} - {self.center_name}'

    def available_slots(self, date):
        from booking.models import Booking
        available_slots = []
        opening_time = timezone.make_aware(datetime.combine(date, self.opening_time))
        closing_time = timezone.make_aware(datetime.combine(date, self.closing_time))
        slot_start_time = opening_time
        slot_id = 1
        while slot_start_time < closing_time:
            slot_end_time = slot_start_time + timedelta(minutes=30)
            if not self.bookings.filter(bookingslot__slot__start_time=slot_start_time).exists():
                if self.max_capacity:
                    bookings = \
                        Booking.objects.filter(bookingslot__slot__start_time=slot_start_time).aggregate(Sum('number_of_players'))[
                            'number_of_players__sum']
                    available_capacity = self.max_capacity - (bookings or 0)
                    if available_capacity <= 0:
                        continue
                else:
                    available_capacity = 1

                slot_data = {
                    'slot_id': slot_id,
                    'start_time': slot_start_time.strftime('%Y-%m-%dT%H:%M:%S.%fZ'),
                    'end_time': slot_end_time.strftime('%Y-%m-%dT%H:%M:%S.%fZ'),
                    'available_capacity': available_capacity,
                    'center_name': self.center_name,
                    'event_title': None
                }

                # Check for double court games
                double_court_games = ['Desert Storm', 'Tikal', 'Showdown']
                for game in double_court_games:
                    if self.events.filter(event_title=game, start_time__lte=slot_start_time,
                                          end_time__gte=slot_end_time).exists():
                        # Block both courts for the duration of the time slot
                        courts = self.courts.filter(double_court=True)
                        for court in courts:
                            if not court.is_available(slot_start_time, slot_end_time):
                                continue
                            slot_data['available_capacity'] = min(slot_data['available_capacity'], court.capacity)
                            slot_data['event_title'] = game
                            court.block(slot_start_time, slot_end_time)

                        break

                # Check for single court games
                if slot_data['event_title'] is None:
                    single_court_games = ['Patient Zero', 'Lost City', 'Cube', 'Diamond Skull', 'Urban Assault']
                    for game in single_court_games:
                        if self.events.filter(event_title=game, start_time__lte=slot_start_time,
                                              end_time__gte=slot_end_time).exists():
                            # Block one court for the duration of the time slot
                            courts = self.courts.filter(double_court=False)
                            for court in courts:
                                if not court.is_available(slot_start_time, slot_end_time):
                                    continue
                                slot_data['available_capacity'] = min(slot_data['available_capacity'], court.capacity)
                                slot_data['event_title'] = game
                                court.block(slot_start_time, slot_end_time)

                            break

                available_slots.append(slot_data)
                slot_id += 1

            slot_start_time = slot_end_time

        return available_slots
