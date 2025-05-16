import { useState } from "react";
import Button from "./Button";
import { ListTodo, AlignLeft, SquareCheckBig } from "lucide-react";
function Filters({ setFiltro }) {
    return (
        <div className="flex w-full justify-center items-center my-4 gap-1 lg:gap-3">
            <Button onClick={() => setFiltro("todos")}><ListTodo size={16} />Todas</Button>
            <Button onClick={() => setFiltro("pendente")}><AlignLeft size={16} /> Pendentes</Button>
            <Button onClick={() => setFiltro("concluido")}><SquareCheckBig size={16} />Concluidas</Button>
        </div>
    )
}

export default Filters;