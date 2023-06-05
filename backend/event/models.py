from django.db import models
from center.models import Center
from court.models import Court
from game.models import Game
from datetime import datetime


class Event(models.Model):
    event_CHOICES = (
        ('open', 'open'),
        ('closed', 'closed'),
        ('cancelled', 'cancelled'),
    )
    event_id = models.AutoField(primary_key=True)
    event_title = models.CharField(max_length=100)
    event_description = models.CharField(max_length=100)
    event_duration_minutes = models.IntegerField(default=120)
    event_status = models.CharField(max_length=100, choices=event_CHOICES)
    event_number_of_players = models.IntegerField()
    event_price = models.IntegerField()
    event_selected_game = models.ForeignKey(to=Game, on_delete=models.CASCADE, related_name='events', null=True)
    center = models.ForeignKey(Center, on_delete=models.CASCADE, related_name='events', null=True)
    courts = models.ManyToManyField(Court, related_name='events', blank=True)
    start_time = models.DateTimeField(null=True, blank=True)
    end_time = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return self.event_title + ' - ' + self.event_status

    def save(self, *args, **kwargs):
        """
        Save method to set start_time
        """
        if not self.start_time and self.pk:
            slots = self.event_slots.all()
            if slots.exists():
                self.start_time = slots.order_by('start_time').first().start_time
            else:
                self.start_time = datetime.now()
        super().save(*args, **kwargs)
