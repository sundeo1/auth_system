from rest_framework import routers, urlpatterns
from .api import TaskViewSet

router = routers.DefaultRouter()
router.register('api/tasks', TaskViewSet, 'tasks')

urlpatterns = router.urls