from rest_framework import serializers


class SlotSerializer(serializers.Serializer):
    slot_id = serializers.IntegerField(read_only=True)
    center_name = serializers.CharField()
    event_title = serializers.CharField(required=False, allow_blank=True)
    start_time = serializers.DateTimeField(format='%Y-%m-%dT%H:%M:%S.%fZ')
    end_time = serializers.DateTimeField(format='%Y-%m-%dT%H:%M:%S.%fZ')
    available_slots = serializers.IntegerField()

    def create(self, validated_data):
        pass

    def update(self, instance, validated_data):
        pass
