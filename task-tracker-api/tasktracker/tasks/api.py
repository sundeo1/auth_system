from rest_framework.decorators import permission_classes
from tasks.models import Task
from rest_framework import viewsets, permissions
from .serializers import TaskSerializer

#Task Viewset
class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = TaskSerializer