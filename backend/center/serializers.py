from rest_framework import serializers

from center.models import Center


class CenterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Center
        fields = '__all__'
