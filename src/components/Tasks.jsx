import { ChevronRight, Check, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }){
    const navigate = useNavigate();

    function onSeeDetailsClick(task){
        // DEIXAR MAIS SEGURO
        const query = new URLSearchParams()
        query.set("title", task.title)
        query.set("description", task.description)
        navigate(`/details?${query.toString()}`)
    }

    return(
        <ul className="bg-slate-200 p-6 space-y-4 rounded-md shadow">
            {tasks.map((task) =>(
                <li key={task.id} className="flex gap-2" >
                    <button 
                        onClick={()=> onTaskClick(task.id)} 
                        className={`bg-slate-400 text-white p-2 rounded-md w-full text-left flex gap-2 ${task.isCompleted && "line-through" }`}>
                        {task.isCompleted && <Check />}
                        {task.title}
                    </button>

                    <Button onClick={() => onSeeDetailsClick(task)}> 
                        <ChevronRight />
                    </Button>
                    
                    <Button onClick={() => onDeleteTaskClick(task.id)}> 
                        <Trash />
                    </Button>
                </li>
            ))}
        </ul>
    )
}
export default Tasks;