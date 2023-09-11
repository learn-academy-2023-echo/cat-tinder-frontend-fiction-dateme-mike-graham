import React, { useState } from "react" 
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import FicCharEdit from "./pages/FicCharEdit"
import FicCharIndex from "./pages/FicCharIndex"
import FicCharNew from "./pages/FicCharNew"
import FicCharShow from "./pages/FicCharShow"
import NotFound from "./pages/NotFound"
import { Routes, Route } from "react-router-dom"

import mockFicChars from "./mockFicChars"

const App = () => {

  const [ficChars, setFicChars] = useState(mockFicChars)

  const createFicChar = (ficChar) => {
    console.log("Jason", ficChar)
  }

  const updateFicChar = (ficChar, id) => {
    console.log("ficChar:", ficChar)
    console.log("id:", id)
  } 

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/ficCharindex" element={ <FicCharIndex ficChars = {ficChars}/> } />
      <Route path="/ficharshow/:id" element={<FicCharShow ficChars = {ficChars} />} />
      <Route path="/ficcharnew" element={ <FicCharNew createFicChar={createFicChar} /> } />
      <Route path="/ficcharedit/:id" element={ <FicCharEdit ficChars= {ficChars} updateFicChar = {updateFicChar} /> } />
      <Route path="*" element={ <NotFound /> } />
    </Routes>
    <Footer />
    </>
  )
}



export default App
