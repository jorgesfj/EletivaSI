from django.shortcuts import render, reverse, redirect, get_object_or_404

from .models import Tarefa
from .forms import TarefaForm


def listar(request):
    tarefas = Tarefa.objects.all()
    return render(request, 'tarefas/list.html', {'tarefas': tarefas})

def adicionar(request):
    form = TarefaForm(request.POST or None)

    if form.is_valid():
        form.save()
        return redirect(reverse("tarefas:listar"))

    return render(request, "tarefas/add.html", context={"form": form})

def deletar(request, tarefa_pk):
    tarefa = get_object_or_404(Tarefa.objects, pk=tarefa_pk)

    tarefa.delete()

    return redirect(reverse("tarefas:listar"))
