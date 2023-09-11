import React from "react"
import { useParams, useNavigate } from "react-router-dom"
import FicCharEdit from "../pages/FicCharEdit"
import { NavLink } from "react-router-dom"


const FicCharShow = ({ ficChars }) => {
    const {id} = useParams()

    let selectedficChar = ficChars?.find((ficChar) => ficChar.id === +id)
    console.log(selectedficChar)
    return (
      <>
        <img 
        alt={`profile pic of ${selectedficChar.name}`}
        src= {selectedficChar.image}/>
        <h3> {selectedficChar.name} likes {selectedficChar.enjoys}</h3>
        <NavLink to={`/ficcharedit/${selectedficChar.id}
        `} className="nav-link">
          Edit Profile
        </NavLink>
      </>
    )
  }

export default FicCharShow

