import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
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
    <section className='w-full h-full'>
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
                <Textarea placeholder="Describe in brief"></Textarea>
              </>)}
            </div>
            </>
        ))}

<Button className="w-1/2 text-white bg-blue-600 hover:bg-blue-700"><Link className="flex items-center gap-2" to={"/teacher/exam-info/create/success"}><ArrowRight size={16}/> Next step</Link></Button>

    </section>
  )
}

export default ThirdPage