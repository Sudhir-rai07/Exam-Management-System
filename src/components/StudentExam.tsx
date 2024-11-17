import { examStatus } from "@/dummyData/examData"
import StudentExamCard from "./utils/StudentExamCard"
import { StudentExamCardType } from "@/Types/types"
const StudentExam = () => {

   
  return (
    <section className='grid w-full h-full grid-cols-1 gap-8 overflow-y-scroll lg:place-items-start md:gap-6 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {examStatus.map((exam:StudentExamCardType, idx:number)=> (
            <StudentExamCard key={idx} examDate={exam.examDate} examDuration={exam.examDuration} examName={exam.examName} examStatus={exam.examStatus}/>
        ))}
    </section>
  )
}

export default StudentExam