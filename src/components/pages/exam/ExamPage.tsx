import { Button } from '@/components/ui/button';
import examData from '@/dummyData/examData.json'
import { Question } from '@/Types/types';
const ExamPage = () => {

    const exam1 = examData[0];
  return (
    <div className='w-full h-full'>
        <h1 className='text-xl font-semibold'>Exam info</h1>
        <hr className='my-4'/>
        <div className='h-[80%]'>
            <div>
                <h2 className='text-lg font-bold'>{exam1.title}</h2>
                <p className='text-sm'>{exam1.description}</p>
                <p className='text-sm'>Last date : {exam1.due_date}</p>
            </div>

            <div className='overflow-y-scroll h-[70%]'>
                {exam1.questions.map((question: Question, idx:number)=> {

                    return (
                        <div key={idx} className='px-2 px-4 py-4 mt-2 mb-4 bg-white rounded-md shadow-md'>
                            <p>Que {idx+1}: <br /> <span className="text-lg font-semibold">{question.question_text}</span></p>
                        </div>
                    )
                })}
            </div>
            <hr className='my-4'/>
            <div>
                <h2 className='text-lg font-semibold'>Actions: </h2>
                <div className='flex items-center gap-6 mt-3'>
                <Button className="text-white bg-blue-500">Assign to groups</Button>
                <Button className="text-white bg-blue-500">Assign to students</Button>
                <Button className="text-white bg-blue-500">View Results</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ExamPage