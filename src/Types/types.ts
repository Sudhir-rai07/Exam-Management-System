export interface User {
    user_id: number | string;
    username: string;
    email: string;
    password: string;
    role: string;
    created_at?: string;
    last_login?: Date;
}

export interface StudentGrade {
    grade_id: number | string;
    exam_id: number | string;
    time_spent: number;
    grade: 1|2|3|4|5;
    feedback: string;
    feedback_time: Date;
    grade_time: Date;
}

export interface Questions {
    question_id: number | string;
    question_type: string;
    question_text: string;
    multimedia_content: string;
}
export interface Exams {
    exam_id: number | string;
    teacher_id: number;
    title: string;
    description: string;
    time_limit: number;
    difficulty: string;
    due_date: Date;
    created_at: Date;
    question_id: number | string;
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
    created_at: Date;
}

export interface Organization {
    org_id: number | string;
    name: string;
    description: string;
    admins?: User[];
    instructors?: User[];
    students?: User[];
}