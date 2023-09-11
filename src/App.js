import React, { useEffect, useState } from "react" 
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import CharEdit from "./pages/CharEdit"
import CharIndex from "./pages/CharIndex"
import CharNew from "./pages/CharNew"
import CharShow from "./pages/CharShow"
import NotFound from "./pages/NotFound"
import { Routes, Route } from "react-router-dom"



const App = () => {

  const [chars, setChars] = useState([])

  useEffect(() => {
    readChar()
  }, [])

  const readChar = () => {
    fetch("http://localhost:3000/fictional_chars")
    .then((response) => response.json())
    .then((payload) => {
      setChars(payload)
    })
    .catch((errors) => console.log(errors))
  }

  const createChar = (char) => {
    fetch("http://localhost:3000/fictional_chars", {
      body: JSON.stringify(char),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then((response) => response.json())
      .then((payload) => readChar())
      .catch((errors) => console.log("lets see sum:", errors))
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
