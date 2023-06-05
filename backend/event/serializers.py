from rest_framework import serializers
from .models import Event


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'


class EventCreateSerializer(serializers.ModelSerializer):

    class Meta:
        model = Event
        fields = ('event_title', 'event_description', 'event_duration_minutes', 'event_number_of_players', 'event_price',
                  'event_selected_game', 'center', 'start_time')

    def create(self, validated_data):
        event = Event.objects.create(**validated_data)
        return event
