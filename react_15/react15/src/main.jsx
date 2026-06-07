import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ListaZadan from './components/ListaZadan.jsx'
import ListaStudentow from './components/ListaStudentow.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <ListaZadan />
    <ListaStudentow />
  </StrictMode>,
)
