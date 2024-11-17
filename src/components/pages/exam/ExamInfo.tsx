import { Plus } from "lucide-react"
import ExamCard from "../../utils/ExamCard"
import QueryForm from "../../utils/QueryForm"
import StaticStarRating from "../../utils/StaticStarRating"
import { Link } from "react-router-dom"

const ExamInfo = () => {
  return (
    <section className="w-full h-full pb-8">
        <QueryForm />
        <hr className="h-[2px] my-4 bg-gray-300 dark:bg-gray-700"/>
        <div className="grid w-full grid-cols-1 gap-4 pb-8 overflow-y-scroll place-items-center h-2/3 md:grid-cols-2 lg:grid-cols-3">
        <Link to={'/teacher/exam-info/create/basic'} className="h-[280px] cursor-pointer w-[300px] flex justify-center items-center border-2 px-2 py-1">
          <Plus size={100}/>
           </Link>
          {Array.from({length: 5}).map((_, idx:number)=>(
            <ExamCard date="20/07/2024" examName="Math Exam" group={4} time="45" key={idx+1} difficulty={<StaticStarRating key={idx} rating={4}/> }/>
          ))}
        </div>
    </section>
  )
}

export default ExamInfo