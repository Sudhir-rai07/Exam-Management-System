import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { ThemeProvider } from './components/theme-provider'

// import StudentExam from './components/StudentExam'
import StudentExam from './components/StudentExam'
// const StudentExam = lazy(()=> import('./components/StudentExam'))

import ThirdPage from './components/pages/CreateExam/ThirdPage'
// const ThirdPage = lazy(()=> import('./components/pages/CreateExam/ThirdPage'))

import PageFour from './components/pages/CreateExam/PageFour'
// const PageFour = lazy(()=> import('./components/pages/CreateExam/PageFour'))


import UpdateProfile from './components/pages/user/UpdateProfile'
// const UpdateProfile = lazy(()=> import('./components/pages/user/UpdateProfile'))



import ResetPassword from './components/auth/ResetPassword'
// const ResetPassword = lazy(()=> import('./components/auth/ResetPassword'))


import CreateExam from './components/pages/CreateExam/CreateExam'
// const CreateExam = lazy(()=> import('./components/pages/CreateExam/CreateExam'))


import FirstPage from './components/pages/CreateExam/FirstPage'
// const FirstPage = lazy(()=> import('./components/pages/CreateExam/FirstPage'))

import SecondPage from './components/pages/CreateExam/SecondPage'
// const SecondPage = lazy(()=> import('./components/pages/CreateExam/SecondPage'))


import Questions from './components/pages/Questions'
// const Questions = lazy(()=> import('./components/pages/Questions'))

import ValidateAnswers from './components/pages/ValidateAnswers'
// const ValidateAnswers = lazy(()=> import('./components/pages/ValidateAnswers'))

import Login from './components/auth/Login'
// const Login = lazy(()=> import('./components/auth/Login'))

import SignUp from './components/auth/SignUp'
// const SignUp = lazy(()=> import('./components/auth/SignUp'))

import Home from './components/Home'
// const Home = lazy(()=> import('./components/Home'))

import Profile from './components/pages/user/Profile'
// const Profile = lazy(()=> import('./components/pages/user/Profile'))

import EmptyPage from './components/pages/Home/EmptyPage'
// const EmptyPage = lazy(()=> import('./components/pages/Home/EmptyPage'))

import ExamInfo from './components/pages/ExamInfo'
// const ExamInfo = lazy(()=> import('./components/pages/ExamInfo'))

import TestBank from './components/pages/TestBank'
// const TestBank = lazy(()=> import('./components/pages/TestBank'))

import Organisation from './components/pages/organization/Organization'
// const Organisation = lazy(()=> import('./components/pages/Organisation'))

import Grade from './components/Grade'
import Organizations from './components/pages/organization/Organizations'
import OrganizationList from './components/pages/organization/Organization'
import Org from './components/pages/organization/Org'
import OrganizationStatics from './components/pages/organization/OrganizationStatics'
import Instructors from './components/pages/instructors/Instructors'
import Students from './components/pages/students/Students'
import Student from './components/pages/students/Student'
import StudentGroups from './components/pages/studentGroup/StudentGroups'
import StudentGroup from './components/pages/studentGroup/StudentGroup'




const App = () => {
  return (
    <Suspense fallback={<h1>Loading....</h1>}>
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <Routes>
        <Route path='/' element={<Home />}>
            {/* <Route index element={<EmptyPage />} />
            <Route path='/admin/test-bank' element={<TestBank />} />
            <Route path='teacher/exam-info' element={<ExamInfo />} />
            <Route path='/teacher/exam-info/create/' element={<CreateExam />}>
                  <Route index  path='basic' element={<FirstPage />} />
                  <Route path={'select-question'} element={<SecondPage />} />
                  <Route path={'preview'} element={<ThirdPage />} />
                  <Route path={'success'} element={<PageFour />} />
            </Route> */}
            <Route path='admin/organisation' element={<OrganizationList />} />
            <Route path='admin/organisations' element={<Organizations />} />
            <Route path='admin/organisation/:id' element={<Org />} />
            <Route path='admin/organisation/:id/statistics' element={<OrganizationStatics />} />
             <Route path='admin/instructors' element={<Instructors />} />

             <Route path='admin/students' element={<Students />} />
             <Route path='admin/student/:id' element={<Student />} />

             <Route path='admin/student/groups' element={<StudentGroups />} />
             <Route path='admin/student/groups/:id' element={<StudentGroup />} />
           {/* <Route path='student/grade' element={<Grade />} />
             <Route path='student/exam' element={<StudentExam />} />
            <Route path='teacher/validate-answers' element={<ValidateAnswers />} />
            <Route path='teacher/questions' element={<Questions />} /> */}
        </Route>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/reset-password' element={<ResetPassword />}/>
        <Route path='/profile' element={<Profile />} />
        <Route path='/update-profile' element={<UpdateProfile />} />
      </Routes>
    </ThemeProvider>
      </Suspense>
  )
}

export default App
