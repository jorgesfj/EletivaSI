from django.urls import path
from .views import listar, adicionar, deletar, editar, ver


app_name = "tarefas"

urlpatterns = [
    path('', listar, name="listar"),
    path('inserir/', adicionar, name='adicionar'),
    path("<int:tarefa_pk>/deletar", deletar, name="deletar"),
    path("<int:tarefa_pk>/editar/", editar, name="editar"),
    path('<int:tarefa_id>/ver/', ver, name='ver')
]
