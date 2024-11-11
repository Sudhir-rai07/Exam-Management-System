import { CopyCheck, Eye } from "lucide-react"
import { Button } from "../ui/button"
import { ExamCardType } from "@/Types/types"

const ExamCard: React.FC<ExamCardType> = ({examName, date,difficulty, time, group}) => {
  return (
    <div className="h-[280px] space-y-2 w-[300px] flex flex-col border-2 px-2 py-1">
        <h1 className="flex items-center gap-2 text-xl font-semibold">{examName} <CopyCheck size={15}/></h1>
        <span className="text-sm text-gray-400">{date}</span>
        <p className="flex items-center justify-between">Difficulty  {difficulty}</p>
        <p className="flex items-center justify-between text-gray-400"><span>TIme</span> <span>{time} min</span></p>
        <p className="flex items-center justify-between text-gray-400"><span>Due date</span>  <span>{date}</span></p>
        <p className="flex items-center justify-between text-gray-400"><span>Group</span> <span>{group}</span></p>
        <div className="flex items-center gap-4 ml-auto">
            <Button  className="bg-red-600 hover:bg-red-700" >Delete</Button>
            <Button  className="bg-blue-600 hover:bg-blue-700" >{<Eye /> }View</Button>
        </div>
    </div>
  )
}

export default ExamCard