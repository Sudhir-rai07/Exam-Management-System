import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronRight, Menu } from "lucide-react";
import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const examCreationPhases = [
  { name: "Basic information", url: "basic" },
  { name: "Question Choice", url: "select-question" },
  { name: "Preview and Adjustment", url: "preview" },
  { name: "Created Successfully", url: "success" },
];

const CreateExam = () => {
  const [examName, setExamName] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);
  const [time, setTime] = useState<string>("");
  const [dueTime, setDueTime] = useState<string>("");
  const [group, setGroup] = useState<string>("");
  const [question, setQuestion] = useState<string>("");
  const [questionType, setQuestionType] = useState<
    "Multiple Choice" | "Describe" | "True\false"
  >("Multiple Choice");
  const [options, setOptions] = useState<string[]>([]);
  const [correctAnswer, setCorrectAnswer] = useState<string | string[]>("");

  const location = useLocation();

  const getNavItemStle = (url: string) => {
    return location.pathname.includes(url) ? "text-blue-500 font-semibold bg-blue-500" : "text-black";
  };

  return (
    <section className="w-full h-full">
      {/* CreateExam Navigation */}
      <div
        className={`md:flex hidden  items-center flex-wrap justify-start md:justify-center w-full gap-6 py-4 mx-auto overflow-x-scroll`}
      >
        {examCreationPhases.map(
          (phase: { name: string; url: string }, idx: number) => (
            <Link
              to={phase.url}
              key={idx}
              className={`flex items-center bg-transparent ${getNavItemStle(phase.url)}`}
            >
              <div className="flex items-center px-4 pb-3 border-b-4 rounded-sm border-b-blue-500">
                <p className={`flex items-center text-gray-900 justify-center w-6 h-6 font-semibold ${getNavItemStle(phase.url)} rounded-full`}>
                  {idx + 1}
                </p>
                <span className="ml-2">{phase.name}</span>
              </div>
              {idx + 1 !== examCreationPhases.length && <ChevronRight />}
            </Link>
          )
        )}
      </div>
      {/* Exam navigation for small screens */}
      <DropdownMenu>
        <DropdownMenuTrigger className="inline-block md:hidden">
          <Menu className="mr-2" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="inline-block md:hidden">
          <DropdownMenuLabel></DropdownMenuLabel>
          <DropdownMenuSeparator />
          {examCreationPhases.map(
            (phase: { name: string; url: string }, idx: number) => (
              <DropdownMenuItem
                key={idx}
                className={`flex items-center ${getNavItemStle(phase.url)}`}
              >
                <Link to={phase.url} className="flex items-center px-4 pb-3">
                  <p className="flex items-center justify-center w-6 h-6 font-semibold bg-gray-400 rounded-full">
                    {idx + 1}
                  </p>
                  <span className="ml-2">{phase.name}</span>
                </Link>
                {idx + 1 !== examCreationPhases.length && <ChevronRight />}
              </DropdownMenuItem>
            )
          )}
        </DropdownMenuContent>
      </DropdownMenu>

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
            setCorrectAnswer,
          }}
        />
      </div>
    </section>
  );
};

export default CreateExam;
