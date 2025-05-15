
import { Trash2, SquarePen, Check, Save } from "lucide-react";
import { useState } from "react";
function Tasks({ tarefas, onDeleteClick, onTaskClick, onUpdateClick, filtro }) {
    const [title, setTitle] = useState("");
    const [update, setUpdate] = useState(false);
    const [taskid, setId] = useState("");
    return (
        <div className="w-full bg-stone-50 rounded-md my-5">
            <ul>
                {tarefas.map((tarefa) => {
                    switch (filtro) {
                        case "pendente":
                            if (!tarefa.isCompleted) {
                                return (
                                    <li key={tarefa.id} className="border-1 border-stone-300 px-3 rounded-lg my-2 p-3 flex items-center justify-between hover:bg-blue-50 group">
                                        <div className="flex items-center gap-3 w-full">
                                            <button className={`flex justify-center items-center border-1 border-stone-300 w-6 h-6 rounded-full hover:border-violet-400 hover:bg-violet-100 ${tarefa.isCompleted && "bg-violet-400 text-stone-50 hover:text-stone-800"}`} onClick={() => onTaskClick(tarefa.id)} >{(tarefa.isCompleted) ? <Check size={15} /> : ""}</button>
                                            {(tarefa.id !== taskid) ? <p className={`${tarefa.isCompleted && "line-through text-stone-400"}`}>{tarefa.title}</p> : <input type="text" placeholder="Digite o que quer editar..." value={title} className="border-1 border-stone-300 rounded-lg focus:outline-violet-400 focus:text-stone-700 w-[70%]" onChange={(event) => setTitle(event.target.value)} />}
                                        </div>

                                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            {(update === false) ? <button className="text-stone-400 p-1 rounded-xl hover:bg-violet-200 hover:text-violet-400" onClick={() => { setUpdate(atual => !atual); setId(tarefa.id); }}><SquarePen /></button> : <button className="text-stone-400 p-1 rounded-xl hover:bg-violet-200 hover:text-violet-400" onClick={() => {
                                                if (!title.trim()) {
                                                    setTitle("");
                                                    return window.alert("Preencha os campos da tarefa!");
                                                }
                                                onUpdateClick(tarefa.id, title);
                                                setTitle("");
                                                setId("");
                                                setUpdate(atual => !atual);
                                            }}><Save /></button>}

                                            <button className="text-stone-400 p-1 rounded-xl hover:bg-red-100 hover:text-red-400" onClick={() => onDeleteClick(tarefa.id)}><Trash2 /></button>
                                        </div>
                                    </li>
                                );
                            }
                            break;
                        case "concluido":
                            if (tarefa.isCompleted) {
                                return (
                                    <li key={tarefa.id} className="border-1 border-stone-300 px-3 rounded-lg my-2 p-3 flex items-center justify-between hover:bg-blue-50 group">
                                        <div className="flex items-center gap-3 w-full">
                                            <button className={`flex justify-center items-center border-1 border-stone-300 w-6 h-6 rounded-full hover:border-violet-400 hover:bg-violet-100 ${tarefa.isCompleted && "bg-violet-400 text-stone-50 hover:text-stone-800"}`} onClick={() => onTaskClick(tarefa.id)} >{(tarefa.isCompleted) ? <Check size={15} /> : ""}</button>
                                            {(tarefa.id !== taskid) ? <p className={`${tarefa.isCompleted && "line-through text-stone-400"}`}>{tarefa.title}</p> : <input type="text" placeholder="Digite o que quer editar..." value={title} className="border-1 border-stone-300 rounded-lg focus:outline-violet-400 focus:text-stone-700 w-[70%]" onChange={(event) => setTitle(event.target.value)} />}
                                        </div>

                                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            {(update === false) ? <button className="text-stone-400 p-1 rounded-xl hover:bg-violet-200 hover:text-violet-400" onClick={() => { setUpdate(atual => !atual); setId(tarefa.id); }}><SquarePen /></button> : <button className="text-stone-400 p-1 rounded-xl hover:bg-violet-200 hover:text-violet-400" onClick={() => {
                                                if (!title.trim()) {
                                                    setTitle("");
                                                    return window.alert("Preencha os campos da tarefa!");
                                                }
                                                onUpdateClick(tarefa.id, title);
                                                setTitle("");
                                                setId("");
                                                setUpdate(atual => !atual);
                                            }}><Save /></button>}

                                            <button className="text-stone-400 p-1 rounded-xl hover:bg-red-100 hover:text-red-400" onClick={() => onDeleteClick(tarefa.id)}><Trash2 /></button>
                                        </div>
                                    </li>
                                )
                            }
                            break;
                        default:
                            return (
                                <li key={tarefa.id} className="border-1 border-stone-300 px-3 rounded-lg my-2 p-3 flex items-center justify-between hover:bg-blue-50 group">
                                    <div className="flex items-center gap-3 w-full">
                                        <button className={`flex justify-center items-center border-1 border-stone-300 w-6 h-6 rounded-full hover:border-violet-400 hover:bg-violet-100 ${tarefa.isCompleted && "bg-violet-400 text-stone-50 hover:text-stone-800"}`} onClick={() => onTaskClick(tarefa.id)} >{(tarefa.isCompleted) ? <Check size={15} /> : ""}</button>
                                        {(tarefa.id !== taskid) ? <p className={`${tarefa.isCompleted && "line-through text-stone-400"}`}>{tarefa.title}</p> : <input type="text" placeholder="Digite o que quer editar..." value={title} className="border-1 border-stone-300 rounded-lg focus:outline-violet-400 focus:text-stone-700 w-[70%]" onChange={(event) => setTitle(event.target.value)} />}
                                    </div>

                                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {(update === false) ? <button className="text-stone-400 p-1 rounded-xl hover:bg-violet-200 hover:text-violet-400" onClick={() => { setUpdate(atual => !atual); setId(tarefa.id); }}><SquarePen /></button> : <button className="text-stone-400 p-1 rounded-xl hover:bg-violet-200 hover:text-violet-400" onClick={() => {
                                            if (!title.trim()) {
                                                setTitle("");
                                                return window.alert("Preencha os campos da tarefa!");
                                            }
                                            onUpdateClick(tarefa.id, title);
                                            setTitle("");
                                            setId("");
                                            setUpdate(atual => !atual);
                                        }}><Save /></button>}

                                        <button className="text-stone-400 p-1 rounded-xl hover:bg-red-100 hover:text-red-400" onClick={() => onDeleteClick(tarefa.id)}><Trash2 /></button>
                                    </div>
                                </li>
                            );
                    }
                })}
            </ul>
        </div >
    )
}

export default Tasks;