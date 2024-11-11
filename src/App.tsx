import { Route, Routes } from 'react-router-dom'
import Login from './components/auth/Login'
import SignUp from './components/auth/SignUp'
import Home from './components/Home'
import { ThemeProvider } from './components/theme-provider'
import Profile from './components/pages/Profile'
import EmptyPage from './components/pages/Home/EmptyPage'
import ExamInfo from './components/pages/ExamInfo'
import TestBank from './components/pages/TestBank'
import Organisation from './components/pages/Organisation'
import Grade from './components/Grade'
import Instructors from './components/pages/Instructors'

const App = () => {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <Routes>
        <Route path='/' element={<Home />}>
            <Route index element={<EmptyPage />} />
            <Route path='profile' element={<Profile />} />
            <Route path='exam-info' element={<ExamInfo />} />
            <Route path='test-bank' element={<TestBank />} />
            <Route path='organisation' element={<Organisation />} />
            <Route path='instructors' element={<Instructors />} />
            <Route path='grade' element={<Grade />} />
        </Route>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<SignUp />}/>
      </Routes>
    </ThemeProvider>
  )
}

export default App
