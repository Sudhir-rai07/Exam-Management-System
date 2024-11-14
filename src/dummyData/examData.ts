import { Exam, Question } from "@/Types/examAndQuestionType";

export const exams: Exam[] = [
    {
      examId: 1,
      title: "Science Exam",
      duration: 30,
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
          correctAnswer: "Evolution is the change in the characteristics of a species over several generations.",
        },
        {
          id: 103,
          questionText: "Is gravity a force?",
          questionType: "true/false",
          correctAnswer: "True",
        },
      ],
    },
    {
      examId: 2,
      title: "Math Exam",
      duration: 45,
      questions: [
        {
          id: 201,
          questionText: "What is the square root of 16?",
          questionType: "Multiple Choice",
          options: ["2", "4", "8"],
          correctAnswer: "4",
        },
        {
          id: 202,
          questionText: "Describe the Pythagorean theorem.",
          questionType: "Describe",
          correctAnswer: "In a right-angled triangle, the square of the hypotenuse is equal to the sum of the squares of the other two sides.",
        },
        {
          id: 203,
          questionText: "Is 0 an even number?",
          questionType: "true/false",
          correctAnswer: "True",
        },
      ],
    },
  ];


  export const questions: Question[] = [
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
      correctAnswer: "Evolution is the change in the characteristics of a species over several generations.",
    },
    {
      id: 103,
      questionText: "Is gravity a force?",
      questionType: "true/false",
      correctAnswer: "True",
    },
    {
        id: 201,
        questionText: "What is the square root of 16?",
        questionType: "Multiple Choice",
        options: ["2", "4", "8"],
        correctAnswer: "4",
      },
      {
        id: 202,
        questionText: "Describe the Pythagorean theorem.",
        questionType: "Describe",
        correctAnswer: "In a right-angled triangle, the square of the hypotenuse is equal to the sum of the squares of the other two sides.",
      },
      {
        id: 203,
        questionText: "Is 0 an even number?",
        questionType: "true/false",
        correctAnswer: "True",
      },
  ]
  