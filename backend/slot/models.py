from django.db import models


class Slot(models.Model):
    slot_id = models.AutoField(primary_key=True)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()

    def __str__(self):
        return f"{self.start_time.strftime('%Y-%m-%d')} {self.start_time.strftime('%H:%M')} - {self.end_time.strftime('%H:%M')}"
