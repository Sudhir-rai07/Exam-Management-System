import { Route, Routes } from 'react-router-dom'
import Login from './components/auth/Login'
import SignUp from './components/auth/SignUp'
import Home from './components/Home'
import { ThemeProvider } from './components/theme-provider'
import Profile from './components/pages/Profile'
import EmptyPage from './components/pages/Home/EmptyPage'

const App = () => {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <Routes>
        <Route path='/' element={<Home />}>
            <Route index element={<EmptyPage />} />
            <Route path='profile' element={<Profile />} />
        </Route>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<SignUp />}/>
      </Routes>
    </ThemeProvider>
  )
}

export default App
