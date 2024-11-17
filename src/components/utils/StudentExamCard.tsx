import React from 'react'
import { Button } from '../ui/button'
import { Eye, NotepadText, Pen, Timer } from 'lucide-react'
import { StudentExamCardType } from '@/Types/types'
import { Link } from 'react-router-dom'

const StudentExamCard:React.FC<StudentExamCardType> = ({examDate,examDuration,examName,examStatus}) => {

    const buttonEl = (examStatus: string): React.ReactElement =>{
        switch(examStatus){
            case "start":
                return (<><Button className="bg-blue-400 hover:bg-blue-500">
              <Link to={`join`} className='flex items-center gap-3'><Pen size={14}/>  Join</Link>
            </Button></>)
            case "completed":
                return (<>
                <Button className="bg-blue-400 hover:bg-blue-500">
                <Eye size={14}/>   Review
                </Button></>)
            
            case "feedback":
                return (<>
                <Button className="bg-orange-400 hover:bg-orange-500">
                  <NotepadText size={14}/>  Feedback
                </Button></>)
        }

        return (<>
        <Button>
                    Join
                </Button></>)
}

  return (
    <div className="w-[300px] flex justify-between px-6 py-2 h-[120px] rounded-md border-2 border-gray-300 dark:border-gray-700">
                <div className="">
                    <p className="text-lg font-semibold">{examName}</p>
                    <span className="text-sm font-semibold text-gray-400">{examDate}</span>
                </div>
                <div className="flex flex-col justify-between">
                    <span className="flex items-center gap-1 px-2 text-sm font-semibold text-gray-400 border-2 border-orange-500 rounded-sm bg-orange-50 dark:text-black"><Timer size={15}/> {examDuration} min</span>
                    {buttonEl(examStatus)}
                </div>
            </div>
  )
}

export default StudentExamCard