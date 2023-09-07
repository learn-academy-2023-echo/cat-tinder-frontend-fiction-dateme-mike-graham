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

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/FicCharIndex" element={ <FicCharIndex /> } />
      <Route path="/FicCharShow" element={ <FicCharShow /> } />
      <Route path="/FicCharNew" element={ <FicCharNew /> } />
      <Route path="/FicCharEdit" element={ <FicCharEdit /> } />
      <Route path="*" element={ <NotFound /> } />
    </Routes>
    <Footer />
    </>
  )
}



export default App
