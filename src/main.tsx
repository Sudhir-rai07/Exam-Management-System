import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter} from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import {Auth0Provider} from '@auth0/auth0-react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Auth0Provider
    domain='dev-y02gmfi6nl6rcyz6.us.auth0.com'
    clientId='9QdMZozJsoiIxguW9phiXUxQJ9HWzZhg'
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
    <App />
    <Toaster />
    </Auth0Provider>
    </BrowserRouter>
  </StrictMode>,
)
