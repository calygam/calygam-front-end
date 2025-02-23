import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TccFront from './TccFront.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
   <TccFront />

   
  
)
