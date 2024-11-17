
import { Button } from "../ui/button";
import { CopyCheck, Eye } from "lucide-react";
import { Link } from "react-router-dom";
type ValidateAnswerCardType = {
  exam_name: string;
  group: string;
  time: number;
  date: string;
  difficulty: React.ReactElement;
}
const ValidateAnswersCard: React.FC<ValidateAnswerCardType> = ({
  date,
  difficulty,
  exam_name,
  group,
  time,
}) => {
  return (
    <div className="h-[280px] space-y-2 w-[300px] flex flex-col border-2 px-2 py-1 rounded-md">
      <h1 className="flex items-center gap-2 text-xl font-semibold">
        {exam_name} <CopyCheck size={15} />
      </h1>
      <span className="text-sm text-gray-400">{date}</span>
      <p className="flex items-center justify-between">
        Difficulty {difficulty}
      </p>
      <p className="flex items-center justify-between text-gray-400">
        <span>TIme</span> <span>{time} min</span>
      </p>
      <p className="flex items-center justify-between text-gray-400">
        <span>Due date</span> <span>{date}</span>
      </p>
      <p className="flex items-center justify-between text-gray-400">
        <span>Group</span> <span>{group}</span>
      </p>
      <div className="flex items-center gap-4 ml-auto">
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Link to={'/teacher/exam-info/exam/1'} className="flex gap-2 ice">
            {<Eye />}View
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ValidateAnswersCard;

{
  /*
    Exam Name
    date
    difficulty
    time
    group


    */
}
