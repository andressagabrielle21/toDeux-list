import { useState } from "react"
import Button from "./Button"

type TaskFieldProps = {
  loadTask: (taskTitle: string, category: string) => void;
}

const TaskField = ({loadTask} : TaskFieldProps) => {
  const [task, setTask] = useState<string>("")
  const [category, setCategory] = useState<string>("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!task || !category) return alert("You forgot to fill one of the fields.");
    loadTask(task, category)
    setTask("")
    setCategory("")
  }

  return (
    <div className="bg-[#25273C] py-4 px-5 flex justify-around items-center gap-8 rounded-lg">
      <form className="bg-[#25273C] flex max-md:flex-col justify-around items-center gap-8 w-full" onSubmit={handleSubmit}>

        <input value={task} onChange={(e) => setTask(e.target.value)} placeholder="What to do next?" type="text" className="focus:outline-none md:px-3 text-slate-gray bg-[#25273C] text-lg rounded-lg w-30" />

        <select value={category} className="bg-[#25273C] max-md:w-full text-sm text-[#ffffff96] focus:outline-none w-30" onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select a category</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Study">Study</option>
        </select>

        <Button type="submit" color="purple" label="Add task" size="full"/>

      </form>
    </div>
  )
}

export default TaskField