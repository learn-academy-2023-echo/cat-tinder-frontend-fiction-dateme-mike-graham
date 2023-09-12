import React from "react"
import { useParams } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { Button } from "reactstrap"


const CharShow = ({ chars, deleteChar }) => {
  const { id } = useParams()

  let selectedChar = chars?.find((char) => char.id === +id)
  return (
    <>
      <img
        alt={`profile pic of ${selectedChar.name}`}
        src={selectedChar.image} />
      <h3> {selectedChar.name} likes {selectedChar.enjoys}</h3>
      <NavLink to={`/charedit/${selectedChar.id}
        `} className="nav-link">
        <Button>
          Edit Profile
        </Button>
      </NavLink>
      <NavLink to="/charindex">
        <Button onClick={() => deleteChar(id)}>
          Delete Profile
        </Button>
      </NavLink>
    </>
  )
}

export default CharShow

