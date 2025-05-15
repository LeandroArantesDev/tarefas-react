import { Plus } from "lucide-react";
import { useState } from "react";
import Button from "./Button";
function AddTasks({ onAddTask }) {
    const [title, setTitle] = useState("");
    return (
        <div className="w-full flex justify-between gap-3">
            <input type="text" value={title} placeholder="Adicionar uma nova tarefa..." className="border-1 border-stone-300 px-3 rounded-lg focus:outline-violet-400 focus:text-stone-700 w-full" onChange={(event) => setTitle(event.target.value)} />
            <Button onClick={() => {
                if (title.trim() === "") {
                    return;
                }
                onAddTask(title); // Chama a função passada do pai
                setTitle(""); // Limpa o input
            }}><Plus size={16} /><span>Adicionar</span></Button>
        </div >
    )
}

export default AddTasks;