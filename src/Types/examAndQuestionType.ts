type QuestionType = "Multiple Choice" | "Describe" | "true/false"

export interface Question{
    id: number;
    questionText: string;
    questionType: QuestionType;
    options?: string[];
    correctAnswer: string | string[]
}

export interface Exam {
    examId: number;
    title: string;
    duration: number;
    questions: Question[]
}