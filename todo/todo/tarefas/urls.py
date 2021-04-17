from django.urls import path
from .views import listar, adicionar, deletar


app_name = "tarefas"

urlpatterns = [
    path('', listar, name="listar"),
    path('inserir/', adicionar, name='adicionar'),
    path("<int:tarefa_pk>/deletar", deletar, name="deletar"),
]
