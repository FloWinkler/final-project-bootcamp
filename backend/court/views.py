from rest_framework import generics
from rest_framework.permissions import AllowAny

from court.models import Court
from court.serializers import CourtSerializer


class CourtList(generics.ListCreateAPIView):
    """
    List all courts
    """
    queryset = Court.objects.all()
    serializer_class = CourtSerializer
    permission_classes = [AllowAny]


class CourtDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve, update or delete a specific court.
    """
    queryset = Court.objects.all()
    serializer_class = CourtSerializer
    permission_classes = [AllowAny]
