# from datetime import datetime, timedelta
# from event.models import Event
# from slot.models import Slot
# from center.models import Center
#
#
# from django.db.models import Q
#
#
# def get_available_slots(center_name, date, game_name):
#     center = Center.objects.get(center_name=center_name)
#
#     opening_time = datetime.combine(date, center.opening_time)
#     closing_time = datetime.combine(date, center.closing_time)
#
#     Event.objects.filter(
#         center=center,
#         start_time__date=date,
#         event_selected_game__game_name=game_name,
#     )
#
#     slots = []
#     current_time = opening_time
#     while current_time + timedelta(minutes=Event.event_duration_minutes) <= closing_time:
#         end_time = current_time + timedelta(minutes=Event.event_duration_minutes)
#         slot = Slot(event=None)
#         slot.event = Event(start_time=current_time, end_time=end_time)
#         slots.append(slot)
#         current_time = end_time
#
#     conflicting_events = Event.objects.filter(
#         center=center,
#         start_time__date=date,
#         event_selected_game__game_name=game_name,
#         court_id__isnull=False,
#     ).exclude(
#         Q(start_time__gte=closing_time) | Q(end_time__lte=opening_time)
#     )
#
#     for event in conflicting_events:
#         slots = [slot for slot in slots if not event.conflicts_with(slot.event)]
#
#     return slots
