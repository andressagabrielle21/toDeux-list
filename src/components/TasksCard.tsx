import { useEffect, useState } from "react";
import iconChecked from "../assets/images/checked.png"
import iconUnchecked from "../assets/images/unchecked.png"
import Button from "./Button";

type TaskCardProp = {
  id: number,
  title: string;
  taskState: boolean,
  category: string,
  deleteFunc: (id: number ) => void;
  completeFunc: (id: number ) => void;
}

const TasksCard = ({id, title, taskState, category, deleteFunc, completeFunc} : TaskCardProp) => {
  const [isChecked, setIsChecked] = useState<boolean>(false)

  useEffect(() => {
    setIsChecked(taskState)
  }, [taskState])

  return (
    <div className="flex flex-wrap gap-4 justify-between hover:bg-[#373848] animate-animateFromTop px-4 py-3">
      <div className={`flex items-center gap-3 ${isChecked && "line-through"}`} onClick={() => completeFunc(id)}>
        {isChecked ? <img src={iconChecked} width={30} height={30} alt="" /> : <img src={iconUnchecked} alt="" width={30} height={30} />}
        <h1 className="text-xl max-md:text-lg">{title}</h1>
      </div>
      
      <div className="flex justify-end items-center max-md:w-full gap-3 max-md:justify-between ">
        <p className="text-[#ffffff96] text-sm">{category}</p>
        <Button size={undefined} type={undefined} onClick={() => deleteFunc(id)} label="Delete" color="red"/>
      </div>
    </div>
  )
}

export default TasksCard