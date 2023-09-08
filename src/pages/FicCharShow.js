import React from "react"
import { useParams } from "react-router-dom"

const FicCharShow = ({ ficChars }) => {
    const {id} = useParams()

    let selectedficChar = ficChars.find((ficChar) => ficChar.id === +id)
    
    return (
      <>
        <img 
        alt={`profile pic of ${selectedficChar.name}`}
        src= {selectedficChar.image}/>
      <h3> {selectedficChar.name} likes {selectedficChar.enjoys}</h3>
      </>
    )
  }

export default FicCharShow