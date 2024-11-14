import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"
import { Link } from "react-router-dom"

const PageFour = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
        <CheckCircle2 color="white" size={52} className="mb-2 bg-green-500 rounded-full"/>
        <p className="text-lg font-semibold">Create Success</p>
        <p className="text-gray-400">It can be viewed in Exam Info page</p>
        <div className="flex gap-4 mt-4">
        <Button className="w-1/2 text-black bg-gray-300 hover:bg-blue-700"><Link className="flex items-center gap-2" to={"/teacher/exam-info/create"}>Again</Link></Button>
        <Button className="w-1/2 text-white bg-blue-600 hover:bg-blue-700"><Link className="flex items-center gap-2" to={"/teacher/exam-info/create/preview"}>Back</Link></Button>
        </div>

    </div>
  )
}

export default PageFour