import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProviderWrapper } from './contexts/theme.context'
import { AuthProviderWrapper } from './contexts/auth.context'


ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProviderWrapper>
    <ThemeProviderWrapper>
      <Router>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Router>
    </ThemeProviderWrapper>
  </AuthProviderWrapper>

)
