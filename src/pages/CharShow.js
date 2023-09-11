import React from "react"
import { useParams } from "react-router-dom"
import { NavLink } from "react-router-dom"


const CharShow = ({ chars }) => {
    const {id} = useParams()

    let selectedChar = chars?.find((char) => char.id === +id)
    console.log(selectedChar)
    return (
      <>
        <img 
        alt={`profile pic of ${selectedChar.name}`}
        src= {selectedChar.image}/>
        <h3> {selectedChar.name} likes {selectedChar.enjoys}</h3>
        <NavLink to={`/charedit/${selectedChar.id}
        `} className="nav-link">
          Edit Profile
        </NavLink>
      </>
    )
  }

export default CharShow

