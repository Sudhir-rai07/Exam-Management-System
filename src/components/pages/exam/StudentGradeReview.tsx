import React from "react";
import { Link } from "react-router-dom";

type Question = {
  id: number;
  questionText: string;
  questionType: "Multiple Choice" | "Describe" | "true/false";
  options?: string[];
  studentAnswer: string;
  correctAnswer: string;
  score?: number; // Only for descriptive questions
};

type ExamGrade = {
  examTitle: string;
  totalTime: string;
  totalScore: number;
  questions: Question[];
};

const examGrade: ExamGrade = {
  examTitle: "Chemistry Midterm Exam",
  totalTime: "00:10:00",
  totalScore: 2,
  questions: [
    {
      id: 1,
      questionText: "Which of the following elements has the highest electronegativity?",
      questionType: "Multiple Choice",
      options: ["Sodium (Na)", "Chlorine (Cl)", "Carbon (C)", "Magnesium (Mg)"],
      studentAnswer: "Chlorine (Cl)",
      correctAnswer: "Chlorine (Cl)",
    },
    {
      id: 2,
      questionText:
        "Water is considered a polar molecule because of the uneven distribution of electrons between oxygen and hydrogen atoms.",
      questionType: "true/false",
      studentAnswer: "True",
      correctAnswer: "True",
    },
    {
      id: 3,
      questionText:
        "Explain why increasing the temperature generally increases the rate of a chemical reaction.",
      questionType: "Describe",
      studentAnswer: "",
      correctAnswer:
        "Increasing temperature increases the kinetic energy of molecules, leading to more effective collisions.",
      score: 0,
    },
  ],
};

const StudentGradeReview: React.FC = () => {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">{examGrade.examTitle}</h1>
        <p className="text-lg font-semibold">
          Total Time: <span className="text-gray-700">{examGrade.totalTime}</span>
        </p>
      </div>

      <div className="flex gap-6">
        <div className="flex-1">
          {examGrade.questions.map((question, index) => (
            <div key={question.id} className="mb-6">
              <div className="flex items-center">
                <p className="mr-2 text-xl font-semibold">{index + 1}.</p>
                <p
                  className={`text-xl font-semibold ${
                    question.studentAnswer === question.correctAnswer || question.score && question.score > 0
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {question.studentAnswer === question.correctAnswer || question.score && question.score > 0
                    ? "✔"
                    : "✘"}
                </p>
              </div>
              <p className="text-lg">{question.questionText}</p>

              {question.questionType === "Multiple Choice" && (
                <div className="ml-4">
                  {question.options?.map((option) => (
                    <div key={option} className="flex items-center gap-2">
                      <input
                        type="radio"
                        disabled
                        checked={question.studentAnswer === option}
                      />
                      <label
                        className={`${
                          option === question.correctAnswer
                            ? "text-green-500"
                            : option === question.studentAnswer
                            ? "text-red-500"
                            : ""
                        }`}
                      >
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              )}

              {question.questionType === "true/false" && (
                <div className="flex gap-4 ml-4">
                  <label>
                    <input
                      type="radio"
                      disabled
                      checked={question.studentAnswer === "True"}
                    />
                    <span
                      className={
                        question.correctAnswer === "True"
                          ? "text-green-500"
                          : "text-red-500"
                      }
                    >
                      True
                    </span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      disabled
                      checked={question.studentAnswer === "False"}
                    />
                    <span
                      className={
                        question.correctAnswer === "False"
                          ? "text-green-500"
                          : "text-red-500"
                      }
                    >
                      False
                    </span>
                  </label>
                </div>
              )}

              {question.questionType === "Describe" && (
                <div className="ml-4">
                  <p className="font-semibold">
                    Student's Answer:{" "}
                    <span
                      className={`${
                        question.score === 0 ? "text-red-500" : "text-green-500"
                      }`}
                    >
                      {question.studentAnswer || "Not answered"}
                    </span>
                  </p>
                  <p className="font-semibold">
                    Correct Answer: <span>{question.correctAnswer}</span>
                  </p>
                  <p className="font-semibold">
                    Score: <span>{question.score}</span>
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="w-1/4">
          <div className="flex flex-wrap gap-2">
            {examGrade.questions.map((_, index) => (
              <button
                key={index}
                className={`w-14 py-2 rounded text-white font-semibold ${
                  examGrade.questions[index].studentAnswer ===
                    examGrade.questions[index].correctAnswer ||
                    examGrade.questions[index].score && examGrade.questions[index].score > 0
                    ? "bg-green-200 border-2 border-green-400 text-green-600" 
                    : "bg-pink-200 border-2 border-pink-400 text-pink-600"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-6">
        <button className="px-4 py-2 font-semibold text-white bg-blue-500 rounded">
            <Link to={'/student/grade'}>
          Back
            </Link>
        </button>
        <p className="text-lg font-semibold">
          Grade: <span className="text-green-500">{examGrade.totalScore}</span>
        </p>
      </div>
    </div>
  );
};

export default StudentGradeReview;
