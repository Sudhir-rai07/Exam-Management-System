import StudentExamCard from "./utils/StudentExamCard"
const StudentExam = () => {

   
  return (
    <section className='grid w-full h-full grid-cols-1 gap-8 overflow-y-scroll lg:place-items-start md:gap-6 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {Array.from({length:10}).map((_, idx:number)=> (
            <StudentExamCard key={idx} examDate="20/07/2024" examDuration="30" examName="Chemistry" examStatus="completed"/>
        ))}
    </section>
  )
}

export default StudentExam