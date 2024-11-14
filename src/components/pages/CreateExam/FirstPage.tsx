import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem } from "@/components/ui/select";
import StarRating from "@/components/utils/StarRating";
import { SelectTrigger, SelectValue } from "@radix-ui/react-select";
import { ArrowRight } from "lucide-react";
import { Link, useOutletContext } from "react-router-dom";
interface ExamContext {
  examName: string;
  setExamName: React.Dispatch<React.SetStateAction<string>>;
  difficulty: number;
  setDifficulty: React.Dispatch<React.SetStateAction<number>>;
  time: string;
  setTime: React.Dispatch<React.SetStateAction<string>>;
  dueTime: string;
  setDueTime: React.Dispatch<React.SetStateAction<string>>;
  group: string;
  setGroup: React.Dispatch<React.SetStateAction<string>>;

}
function FirstPage() {
  const {
    examName,
    setExamName,
    difficulty,
    setDifficulty,
    time,
    setTime,
    dueTime,
    setDueTime,
    group,
    setGroup
  } = useOutletContext<ExamContext>();
  return <div className="max-w-[300px] w-full flex flex-col gap-3">
        <Label htmlFor="examName">Exam name</Label>
        <Input type="text" className="w-full" value={examName} onChange={(e)=> setExamName(e.target.value)} 
        placeholder="Enter exam name"/>

        <Label htmlFor="difficulty">Difficulty</Label>
        <StarRating />

        <Label htmlFor="time">Time</Label>
        <Input type="text" className="w-full" value={time} onChange={(e)=> setTime(e.target.value)} placeholder="Enter time"/>

        <Label htmlFor="dueTime">Due Time</Label>
        <Input type="datetime-local" className="w-full" value={dueTime} onChange={(e)=> setDueTime(e.target.value)} placeholder="Enter due time"/>
        
            <Label>Group</Label>
        <Select onValueChange={(value) => setGroup(value)}>
                <SelectTrigger className="w-full py-1 bg-white border-2 rounded-md dark:bg-gray-950">
                  <SelectValue placeholder="Select Group" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({length: 5}).map((_, idx:number) =>(
                    <SelectItem key={idx} value={`${idx+1}`}>{idx+1}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

        <Button className="w-1/2 text-white bg-blue-600 hover:bg-blue-700"><Link className="flex items-center gap-2" to={"/teacher/exam-info/create/select-question"}><ArrowRight size={16}/> Next step</Link></Button>
  </div>;
}

export default FirstPage;

{
  /**
    
    name
    difficulty
    time
    datetime
    Group
    */
}
