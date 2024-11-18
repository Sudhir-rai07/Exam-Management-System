export interface User {
    user_id: number | string;
    username: string;
    email: string;
    password: string;
    role: string;
    created_at?: string;
    last_login?: string;
}

export interface AuthUser {
    sub: string; // Unique Google ID
    name: string;
    email: string;
    picture: string;
  }

export interface StudentGrade {
    grade_id: number | string;
    exam_id: number | string;
    time_spent: number;
    grade: 1|2|3|4|5;
    feedback: string;
    feedback_time: string;
    grade_time: string;
}

export interface Question {
    question_id: number | string;
    question_type: string;
    question_text: string;
    difficulty: number;
    created_by: string;
    multimedia_content?: string;
}

export interface TestBank {
    testBank_id: number | string;
    name: string;
    description: string;
    questions: Question[];
}
export interface Exam {
    exam_id: number | string;
    teacher_id: number | string;
    title: string;
    description: string;
    time_limit: number;
    difficulty: number;
    questions: Question[];
    due_date: string;
    created_at: string;
}

export interface QuestionOptions {
    option_id: number | string;
    question_id: number | string;
    option_text: string;
    is_correct: boolean;
}

export interface Answers {
    answer_id: number | string;
    question_id: number | string;
    answer_text: string;
    is_correct: boolean;
    grade: 1|2|3|4|5;
}

export interface OperationLogs {
    log_id: number | string;
    user_id: number | string;
    request_url: string;
    request_params: string;
    response_status: number;
    created_at: string;
}

export interface Organization {
    org_id: number | string;
    name: string;
    description: string;
    email: string,
    password: string;
    last_login?: string
    admins?: User[];
    instructors?: User[];
    students?: User[];
}

export interface StudentGroup {
    group_id: number | string;
    name: string;
    students: User[];
}




export interface GradeCardType {
    date: string;
    grade: number;
    name: string;
    time: number
  }
  

  export interface StudentExamCardType {
    examDate: string;
    examDuration: number;
    examName: string;
    examStatus: "start"|"completed"|"feedback";
  }