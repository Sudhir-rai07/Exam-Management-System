import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { questions } from "@/dummyData/examData"
import { Question } from "@/Types/examAndQuestionType"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const ThirdPage = () => {
  console.log(questions[0])
  return (
    <section className='flex flex-col w-full h-full md:flex'>
      <div className="w-full h-full py-4 overflow-y-scroll md:w-2/3">
        {questions.length>0 && questions.map((question:Question, idx:number)=>(
            <>
            <div className="flex flex-col gap-2 mb-8" key={idx+"p"}>
              <h2 className="text-lg font-semibold">{idx+1}.</h2>
              <p className="font-semibold">Q: {question.questionText}</p>
              <RadioGroup key={idx} className="flex gap-2 mr-3">
                {
                   question.options && question.options?.length>0 && question.options.map((option:string, idx:number)=>{
                      return (
                        <>
                        
                        <RadioGroupItem value={option} id={`${idx}`}>{option}</RadioGroupItem>
                          <Label htmlFor={`${option}`}>{option}</Label></>
                        )
                      })}
                      </RadioGroup>
              {question.questionType === "true/false" && (<>
              <RadioGroup className="flex gap-2">
                <RadioGroupItem value="true" id="r1"/>
                <Label htmlFor="r1">True</Label>
                <RadioGroupItem value="false" id="r2"/>
                <Label htmlFor="r2">False</Label>

                </RadioGroup>
              </>)}
              {question.questionType === "Describe" && (<>
                <Textarea placeholder="Describe in brief" className="w-full px-4 md:w-1/2"></Textarea>
              </>)}
              
            </div>
            </>
        ))}
        </div>

<div className="flex items-end py-4 ml-4">
<Button className="mt-4 text-white bg-blue-600 hover:bg-blue-700"><Link className="flex items-center gap-2" to={"/teacher/exam-info/create/success"}><ArrowRight size={16}/> Next step</Link></Button>

</div>
    </section>
  )
}

export default ThirdPage