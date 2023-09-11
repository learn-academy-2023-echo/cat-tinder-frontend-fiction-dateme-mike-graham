import React from "react"

import { Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"


const Header = () => {
return(
<Nav>
      <NavItem>
        <NavLink to="/charindex" className="nav-link">
          See All the Profiles
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/charnew" className="nav-link">
          Add a New Profile
        </NavLink>
      </NavItem>
    </Nav>
    )
}

export default Header