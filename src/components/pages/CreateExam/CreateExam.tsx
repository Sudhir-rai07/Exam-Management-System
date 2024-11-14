import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const examCreationPhases = [
  "Basic information",
  "Question Choice",
  "Preview and Adjustment",
  "Created Successfully",
];

const CreateExam = () => {
  const [examName, setExamName] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);
  const [time, setTime] = useState<string>("");
  const [dueTime, setDueTime] = useState<string>("");
  const [group, setGroup] = useState<string>(""); 
  const [question, setQuestion] = useState<string>("");
  const [questionType, setQuestionType] = useState<"Multiple Choice" | "Describe" | "True\false">("Multiple Choice")
  const [options, setOptions] = useState<string[]>([])
  const [correctAnswer, setCorrectAnswer] = useState<string | string[]>("")

  return (
    <section className="w-full h-full">
      {/* CreateExam Navigation */}
      <div className="flex items-center justify-center w-full gap-6 py-4 mx-auto">
        {examCreationPhases.map((phase: string, idx: number) => (
          <div key={idx} className="flex items-center">
            <div className="flex items-center px-4 pb-3 border-b-4 rounded-sm border-b-blue-500">
              <p className="flex items-center justify-center w-6 h-6 font-semibold text-gray-700 bg-gray-400 rounded-full">
                {idx + 1}
              </p>
              <span className="ml-2">{phase}</span>
            </div>
            {idx + 1 !== examCreationPhases.length && <ChevronRight />}
          </div>
        ))}
      </div>

      {/* Render Outlet with Context */}
      <div className="flex items-center justify-center w-full h-[90%] mt-10 overflow-y-scroll">
        <Outlet
          context={{
            examName,
            setExamName,
            difficulty,
            setDifficulty,
            time,
            setTime,
            dueTime,
            setDueTime,
            group,
            setGroup,
            question,
            setQuestion,
            questionType,
            setQuestionType,
            options,
            setOptions,
            correctAnswer,
            setCorrectAnswer
          }}
        />
      </div>
    </section>
  );
};

export default CreateExam;
