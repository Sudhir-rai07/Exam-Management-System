export type GradeCardType = {
    name: string
    time: string
    date: string
    grade: number
}

export type ExamCardType = {
    examName: string
    date: string
    difficulty: React.ReactElement
    time: string
    group: number
}

export type OrganisationType = {
    id: number
    name: string
    email: string
    password: string
    last_login_time: string
  }

export type InstructorType = {
    id: number
    name: string
    email: string
    subject: string
    last_login_time: string
}

export type StudentType = {
    id: number
    name: string
    email: string
    group: number
    last_login_time: string
    password: string
}

export type ValidateAnswerCardType = {
    exam_name: string
    date: string
    difficulty: React.ReactElement
    time: string
    group: number
}
