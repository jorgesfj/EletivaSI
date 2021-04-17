from django.db import models


class Tarefa(models.Model):
    TAREFA_STATUS = [
        ("concluido", "Concluído"),
        ("nao_concluido", "Não Concluído")
    ]
    titulo = models.CharField("Titulo", max_length=200)
    conteudo = models.TextField("Descrição")
    status = models.CharField("Status", default="nao_concluido", choices=TAREFA_STATUS, max_length=15)

