import Header from "./components/Header/Header"

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import InitialPage from "./pages/InitialPage/InitialPage"
import FooterAssesment from "./components/FooterAssessment/FooterAssesment"
import ComponentToggleContext from "./context/ComponentToggleContext"
import LoginPage from "./pages/LoginPage/LoginPage.jsx"
import RegisterPage from "./pages/RegisterPage/RegisterPage.jsx"
import TrailPage from "./pages/TrailPage/TrailPage.jsx"

import { useState } from "react"
import Search from "./assets/img/searchIcon.png"






function TccFront() {

  const [toggleComponent,setToggleComponent]=useState(false)

  return (

    <div>


      <BrowserRouter>
      <ComponentToggleContext.Provider value={{toggleComponent,setToggleComponent}}>

        <main >
         
          <Routes>
            <Route path="/" element={<InitialPage />} />
            <Route path="/cursos" element={<div>Chama component de curso</div>} />
            <Route path="/ProcessoSeletivo" element={<div>Chama component de ProcessoSeletivo</div>} />
            <Route path="/FaleConosco" element={<div>Chama component de Fale Conosco</div>} />
            <Route path="/Login" element={<LoginPage/>} />
            <Route path="/Register" element={<RegisterPage/>} />
            <Route path="/Trail" element={<TrailPage/>}/>
          </Routes>
          
        </main>
        </ComponentToggleContext.Provider>
      </BrowserRouter>
      
    
     {/*Caio:<- O Component Footer do projeto encontra-se em outros setores :)*/}
      

    </div>

  )
}

export default TccFront
