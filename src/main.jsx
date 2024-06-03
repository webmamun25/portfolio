import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './components/Routes/router.jsx'
import Container from './components/pages/ui/Container.jsx'
import AuthProviders from './components/Providers/AuthProviders.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Container>
    <AuthProviders>
    <React.StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>

  </React.StrictMode>,
    </AuthProviders>
  </Container>
)
