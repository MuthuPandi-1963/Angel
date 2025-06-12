import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NCP from './Context.jsx'

createRoot(document.getElementById('root')).render(
  <NCP>
    <App/>
  </NCP>  
)
