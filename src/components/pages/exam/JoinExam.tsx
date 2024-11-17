import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";

type Question = {
  id: number;
  questionText: string;
  questionType: "Multiple Choice" | "Describe" | "true/false";
  options?: string[]; // Only for Multiple Choice
  correctAnswer: string;
};

type Exam = {
  examId: number;
  title: string;
  duration: number; // Duration in minutes
  questions: Question[];
};

const exams: Exam[] = [
  {
    examId: 1,
    title: "Science Exam",
    duration: 1, // Duration in minutes for testing
    questions: [
      {
        id: 101,
        questionText: "What is the chemical symbol for water?",
        questionType: "Multiple Choice",
        options: ["H2O", "O2", "CO2"],
        correctAnswer: "H2O",
      },
      {
        id: 102,
        questionText: "Explain the theory of evolution.",
        questionType: "Describe",
        correctAnswer:
          "Evolution is the change in the characteristics of a species over several generations.",
      },
      {
        id: 103,
        questionText: "Is gravity a force?",
        questionType: "true/false",
        correctAnswer: "True",
      },
    ],
  },
];

const JoinExam: React.FC = () => {
  const [currentExam, setCurrentExam] = useState<Exam>(exams[0]);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [timeRemaining, setTimeRemaining] = useState<number>(
    currentExam.duration * 60
  ); // Convert minutes to seconds

  useEffect(() => {
    // Countdown timer
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          handleSubmitExam(); // Auto-submit the exam when time runs out
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup on component unmount
  }, []);

  const handleAnswerChange = (questionId: number, answer: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const handleSubmitExam = () => {
    console.log("Answers submitted:", answers);
    alert("Time's up! Exam submitted.");
    window.location.href = "/student/exam"
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">{currentExam.title}</h1>
        <div className="text-lg font-bold">
          Time Remaining: <span className="text-red-500">{formatTime(timeRemaining)}</span>
        </div>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmitExam();
        }}
      >
        {currentExam.questions.map((question) => (
          <div key={question.id} className="p-4 mb-6 border rounded-lg shadow-sm">
            <h2 className="mb-2 text-lg font-semibold">
              {question.id}. {question.questionText}
            </h2>

            {question.questionType === "Multiple Choice" && (
              <div className="flex flex-col gap-2">
                {question.options?.map((option) => (
                  <label key={option} className="flex items-center">
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      value={option}
                      className="mr-2"
                      checked={answers[question.id] === option}
                      onChange={() => handleAnswerChange(question.id, option)}
                    />
                    {option}
                  </label>
                ))}
              </div>
            )}

            {question.questionType === "true/false" && (
              <div className="flex gap-4">
                <label>
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    value="True"
                    className="mr-2"
                    checked={answers[question.id] === "True"}
                    onChange={() => handleAnswerChange(question.id, "True")}
                  />
                  True
                </label>
                <label>
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    value="False"
                    className="mr-2"
                    checked={answers[question.id] === "False"}
                    onChange={() => handleAnswerChange(question.id, "False")}
                  />
                  False
                </label>
              </div>
            )}

            {question.questionType === "Describe" && (
              <textarea
                className="w-full p-2 border rounded dark:bg-black"
                rows={3}
                value={answers[question.id] || ""}
                onChange={(e) => handleAnswerChange(question.id, e.target.value)}
              />
            )}
          </div>
        ))}

        <Button
          type="submit"
          className="px-4 py-2 mt-4 text-white bg-green-500 rounded hover:bg-green-600"
        >
          Submit Exam
        </Button>
      </form>
    </div>
  );
};

export default JoinExam;
