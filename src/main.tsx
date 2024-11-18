import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter} from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import {GoogleOAuthProvider} from '@react-oauth/google'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId='1087654391185-c1ortfio2daks67utuvprg43f77b3ng6.apps.googleusercontent.com'>
    <BrowserRouter>
    <App />
    <Toaster />
    </BrowserRouter>
    </GoogleOAuthProvider>
  </StrictMode>,
)
