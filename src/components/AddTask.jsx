import { useState } from "react"
import Input from "../components/Input"

function AddTask({onAddTaskSubmit}){
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    return(
        <div className="bg-slate-200 p-6 flex flex-col gap-4 rounded-md">
            <Input 
                type='text'
                placeholder="Digite o titulo da tarefa"
                value={title}
                onChange={(event)=>{setTitle(event.target.value)}}
            />

            <Input 
                type='text'
                placeholder="Digite a descrição da tarefa"
                value={description}
                onChange={(event)=>{setDescription(event.target.value)}}
            />

            {/* esta assim e para para de repetir foi feito do jeito acima  */}

            {/* <input className="p-2 rounded-md outline-2" type="text" name="" id="description" placeholder="Digite a descrição da tarefa" 
            value={description} onChange={(event)=>{setDescription(event.target.value)}}/> */}
            <button 
            onClick={()=> {
                if(!title.trim() || !description.trim()){
                    return alert("Preencha o titulo e a descrição da tarefa")
                }
                onAddTaskSubmit(title, description)
                setTitle("")
                setDescription("")
            }}
            
            className="bg-slate-700 p-2 rounded-md text-white">Adicionar</button>
        </div>
    )
}

export default AddTask