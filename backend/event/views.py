from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from .models import Event
from .serializers import EventSerializer, EventCreateSerializer
# from .permissions import IsEventOwnerOrReadOnly


class EventListView(generics.ListAPIView):
    """
    List all events
    """
    queryset = Event.objects.all()
    serializer_class = EventSerializer


class EventDetailView(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve, update or delete a specific event.
    """
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    # permission_classes = [IsEventOwnerOrReadOnly]


class EventCreateView(generics.CreateAPIView):
    """
    Create a new event
    """
    serializer_class = EventCreateSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
