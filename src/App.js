import React, { useState } from "react" 
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import CharEdit from "./pages/CharEdit"
import CharIndex from "./pages/CharIndex"
import CharNew from "./pages/CharNew"
import CharShow from "./pages/CharShow"
import NotFound from "./pages/NotFound"
import { Routes, Route } from "react-router-dom"

import mockChars from "./mockChars"

const App = () => {

  const [chars, setChars] = useState(mockChars)

  const createChar = (char) => {
  }

  const updateChar = (char, id) => {
  } 

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/charindex" element={ <CharIndex chars = {chars}/> } />
      <Route path="/charshow/:id" element={<CharShow chars = {chars} />} />
      <Route path="/charnew" element={ <CharNew createChar={createChar} /> } />
      <Route path="/charedit/:id" element={ <CharEdit chars= {chars} updateChar = {updateChar} /> } />
      <Route path="*" element={ <NotFound /> } />
    </Routes>
    <Footer />
    </>
  )
}



export default App
