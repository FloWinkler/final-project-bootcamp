from django.db import models

from center.models import Center


class Court(models.Model):
    court_id = models.AutoField(primary_key=True)
    court_number = models.IntegerField()
    capacity = models.IntegerField()
    double_court = models.BooleanField()
    center = models.ForeignKey(Center, on_delete=models.CASCADE, related_name='courts')
    event_courts = models.ManyToManyField('event.Event', related_name='court_events')

    def __str__(self):
        return f"{self.center.center_name} - Court {self.court_number}"

    def is_available(self, start_time, end_time):
        """
        Check whether the court is available for the given time slot.
        """
        conflicting_events = self.event_courts.filter(start_time__lte=end_time, end_time__gte=start_time)
        return not conflicting_events.exists()

    def block(self, start_time, end_time):
        """
        Block the court for the given time slot.
        """
        self.event_courts.create(start_time=start_time, end_time=end_time)
