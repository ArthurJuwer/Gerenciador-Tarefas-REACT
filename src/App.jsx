import { useEffect, useState } from "react"
import AddTask from "./components/AddTask"
import Tasks from "./components/Tasks"
import Title from "./components/Title";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  //   [{
  //   id: 1,
  //   title: 'Estudar Programação',
  //   description: 'Estudar Programação para se tornar um dev.',
  //   isCompleted: false,
  // },{
  //   id: 2,
  //   title: 'Estudar Inglês',
  //   description: 'Estudar Ingles para se comunicar.',
  //   isCompleted: false,
  // },{
  //   id: 3,
  //   title: 'Estudar Matematica',
  //   description: 'Estudar Matematica para fazer calculos.',
  //   isCompleted: false,
  // }]
);

  // FUNCAO PRIORITARIA E A PRIMEIRA A SER MODIFICIADA SEMPRE ATUALIZADA
  useEffect(()=> {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  // OPCIONAL API
  // useEffect(()=>{
  //   // QUANDO A LISTA ESTA VAZIA SÒ ACONTECE 1x

  //   // CHAMAR API

  //   async function  fetchTasks() {
  //     const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10", {
  //       method: 'GET'
  //     })
  //     const data = await response.json()
  //     setTasks(data)
  //   }

  //   fetchTasks();

  // }, [])
  

  function onTaskClick(taskId){
    const newTasks = tasks.map((task =>{
      if(task.id === taskId){
        return {...task, isCompleted: !task.isCompleted}
      }
      return task
    }))
    setTasks(newTasks)
  }
  function onDeleteTaskClick(taskId){
    const newTasks = tasks.filter(task => task.id !== taskId)
    setTasks(newTasks)

  }
  function onAddTaskSubmit(title, description){
    const newTasks = {
      id: tasks.length+1,
      title: title,
      description: description,
      isCompleted: false,
    }
  
    setTasks([...tasks, newTasks])
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center py-6">
      <div className="w-[500px] flex flex-col gap-4">
        <Title>
          Gerenciador de Tarefa
        </Title>
        <AddTask tasks={tasks} onAddTaskSubmit={onAddTaskSubmit}/>
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick}/>
      </div>
    </div>
    
  )
}

export default App
