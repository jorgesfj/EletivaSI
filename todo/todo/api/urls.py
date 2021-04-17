from rest_framework import routers
from .views import TarefaViewSet
from django.urls import path, include

router = routers.DefaultRouter()
router.register("tarefas", TarefaViewSet)

app_name = "api"

urlpatterns = [
    path('', include(router.urls))
]