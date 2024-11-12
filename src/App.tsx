import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { ThemeProvider } from './components/theme-provider'
import ValidateAnswers from './components/pages/ValidateAnswers'

// import Login from './components/auth/Login'
const Login = lazy(()=> import('./components/auth/Login'))

// import SignUp from './components/auth/SignUp'
const SignUp = lazy(()=> import('./components/auth/SignUp'))

// import Home from './components/Home'
const Home = lazy(()=> import('./components/Home'))

// import Profile from './components/pages/Profile'
const Profile = lazy(()=> import('./components/pages/Profile'))

// import EmptyPage from './components/pages/Home/EmptyPage'
const EmptyPage = lazy(()=> import('./components/pages/Home/EmptyPage'))

// import ExamInfo from './components/pages/ExamInfo'
const ExamInfo = lazy(()=> import('./components/pages/ExamInfo'))

// import TestBank from './components/pages/TestBank'
const TestBank = lazy(()=> import('./components/pages/TestBank'))

// import Organisation from './components/pages/Organisation'
const Organisation = lazy(()=> import('./components/pages/Organisation'))

// import Grade from './components/Grade'
const Grade = lazy(()=> import('./components/Grade'))

// import Instructors from './components/pages/Instructors'
const Instructors = lazy(()=> import('./components/pages/Instructors'))

// import Students from './components/pages/Students'
const Students = lazy(()=> import('./components/pages/Students'))


const App = () => {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <Suspense fallback={<h1>Loading....</h1>}>
      <Routes>
        <Route path='/' element={<Home />}>
            <Route index element={<EmptyPage />} />
            <Route path='profile' element={<Profile />} />
            <Route path='admin/students' element={<Students />} />
            <Route path='/admin/test-bank' element={<TestBank />} />
            <Route path='teacher/exam-info' element={<ExamInfo />} />
            <Route path='admin/organisation' element={<Organisation />} />
            <Route path='admin/instructors' element={<Instructors />} />
            <Route path='student/grade' element={<Grade />} />
            <Route path='teacher/validate-answers' element={<ValidateAnswers />} />
        </Route>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<SignUp />}/>
      </Routes>
      </Suspense>
    </ThemeProvider>
  )
}

export default App
