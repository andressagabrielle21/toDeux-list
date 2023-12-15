import { useState } from 'react'
import TaskField from './components/TaskField'
import TasksCard from './components/TasksCard';
import Filter from './components/Filter';

type taskTypes = {
  id: number,
  title: string,
  category: string,
  isCompleted: boolean
}

function App() {
  const [task, setTask] = useState<taskTypes | never[]>([])
  const [filter, setFilter] = useState("All")

  const loadTask = (title: string, category: string) => {
    const newTask = [...task, {
      id: Math.floor(Math.random() * 10000),
      title,
      category,
      isCompleted: false
    }]

    setTask(newTask)
  }

  const completeTask = (id: number) => {
    const tasks = [...task]
    // Diferente do Filter(), o method Map() MODIFICA o array original
    tasks.map((item) => item.id === id ? (item.isCompleted = !item.isCompleted) : item )
    setTask(tasks.map(item => item))
  }

  const deleteTask = (id: number) => {
    const tasks = [...task]
    const filterTask = tasks.filter(item => item.id !== id ? item : null)

    setTask(filterTask)
  }

  return (
    <main className='w-100 min-h-screen p-10 bg-[#181824] text-white flex flex-col gap-8 justify-center md:items-center'> 

      <h1 className='text-left font-bold text-5xl mb-5'>To Deux</h1>

      <TaskField loadTask={loadTask}/>

      <Filter filter={filter} setFilter={setFilter}/>

      {task && <div className='bg-[#25273C] rounded-lg flex flex-col max-md:gap-2 w-[70vw] max-md:w-full'>
        {task.filter((task) => 
          filter === "All" 
          ? task : filter === "Complete" 
          ? task.isCompleted 
          : !task.isCompleted).map((item) => (
          <TasksCard completeFunc={completeTask} deleteFunc={deleteTask} id={item.id} key={item.id} taskState={item.isCompleted} title={item.title} category={item.category}/>
        ))}
      </div>}
      

    </main>
  )
}

export default App
