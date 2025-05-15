import { useEffect, useState } from "react";
import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";
import { Heart } from "lucide-react";
import Filters from "./components/Filters";

function Index() {
    const [tarefas, setTarefa] = useState(() => {
        return JSON.parse(localStorage.getItem("tarefas")) || [];
    });
    const [filtro, setFiltro] = useState("");

    useEffect(() => { localStorage.setItem("tarefas", JSON.stringify(tarefas)) }, [tarefas])

    function onAddTask(title) {
        const newTask = {
            id: tarefas.length + 1,
            title: title,
            isCompleted: false,
        }
        setTarefa([...tarefas, newTask]);
    }

    function onTaskClick(taskId) {
        const newTask = tarefas.map((tarefa) => {
            if (tarefa.id === taskId) {
                return { ...tarefa, isCompleted: !tarefa.isCompleted }
            }
            return tarefa;
        });
        setTarefa(newTask);
    }

    function onUpdateClick(taskid, title) {
        const newTask = tarefas.map((tarefa) => {
            if (tarefa.id === taskid) {
                return { ...tarefa, title: title }
            }
            return tarefa;
        })
        setTarefa(newTask);
    }

    function onDeleteClick(taskid) {
        const newTask = tarefas.filter((tarefa) => tarefa.id != taskid);
        setTarefa(newTask);
    }


    return (
        <section className="w-screen h-screen bg-stone-300 flex items-center p-3 flex-col">
            <div className="flex flex-col items-center p-6">
                <h1 className="text-violet-500 font-bold text-4xl mb-3">Tarefas</h1>
                <p className="text-stone-600">Organize suas tarefas com simplicidade</p>
            </div>
            <div className="w-full bg-stone-50 rounded-md p-2 lg:w-[60%]">
                <AddTasks onAddTask={onAddTask} />
                <Filters setFiltro={setFiltro} />
                <Tasks tarefas={tarefas} onDeleteClick={onDeleteClick} onTaskClick={onTaskClick} onUpdateClick={onUpdateClick} filtro={filtro} />
            </div>
            <div className="text-stone-600 p-7">
                <p>Desenvolvido por <a href="https://leandroarantes.com.br/" target="_blank" className="text-violet-500 font-bold">Leandro Arantes</a>.</p>
            </div>
        </section>
    )
}

export default Index;