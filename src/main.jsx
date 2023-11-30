import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router } from 'react-router-dom'
// import { ThemeProviderWrapper } from './contexts/theme.context'



ReactDOM.createRoot(document.getElementById('root')).render(

  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>

)
