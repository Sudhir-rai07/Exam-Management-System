import { Exam, Question } from '@/Types/examAndQuestionType';
import {create} from 'zustand';

// Zustand store interface
interface ExamStore {
  exams: Exam[];
  addExam: (newExam: Exam) => void;
  addQuestionToExam: (examId: number, question: Question) => void;
  updateQuestionInExam: (examId: number, questionId: number, updatedQuestion: Question) => void;
  removeQuestionFromExam: (examId: number, questionId: number) => void;
}

interface Role {
  role: string;
  setUserRole: (role:string) => void;
}

export const useExamStore = create<ExamStore>((set) => ({
  exams: [],

  addExam: (newExam) => set((state) => ({
    exams: [...state.exams, newExam],
  })),

  addQuestionToExam: (examId, question) => set((state) => ({
    exams: state.exams.map((exam) =>
      exam.examId === examId
        ? { ...exam, questions: [...exam.questions, question] }
        : exam
    ),
  })),

  updateQuestionInExam: (examId, questionId, updatedQuestion) => set((state) => ({
    exams: state.exams.map((exam) =>
      exam.examId === examId
        ? {
            ...exam,
            questions: exam.questions.map((q) =>
              q.id === questionId ? { ...q, ...updatedQuestion } : q
            ),
          }
        : exam
    ),
  })),

  removeQuestionFromExam: (examId, questionId) => set((state) => ({
    exams: state.exams.map((exam) =>
      exam.examId === examId
        ? {
            ...exam,
            questions: exam.questions.filter((q) => q.id !== questionId),
          }
        : exam
    ),
  })),
}));


export const useUserRole = create<Role>((set)=>({
  role: "student",
  setUserRole: (newRole) => set((state)=>({
    role: newRole
  }))
}))