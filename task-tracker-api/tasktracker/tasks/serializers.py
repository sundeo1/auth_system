from django.db.models import fields
from rest_framework import serializers
from tasks.models import Task

#Task Serializer
class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'