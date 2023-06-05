from rest_framework import generics
from rest_framework.permissions import AllowAny

from center.models import Center
from center.serializers import CenterSerializer


class CenterListView(generics.ListAPIView):
    """
    List all centers
    """
    queryset = Center.objects.all()
    serializer_class = CenterSerializer
    permission_classes = [AllowAny]


class CenterDetailView(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve, update or delete a specific center.
    """
    queryset = Center.objects.all()
    serializer_class = CenterSerializer
    permission_classes = [AllowAny]


class CenterCreate(generics.CreateAPIView):
    """
    Create a center
    """
    queryset = Center.objects.all()
    serializer_class = CenterSerializer
    permission_classes = [AllowAny]
