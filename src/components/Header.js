import React from "react"

import { Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"


const Header = () => {
return(
<Nav>
      <NavItem>
        <NavLink to="/ficCharindex" className="nav-link">
          See All the Profiles
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/ficCharnew" className="nav-link">
          Add a New Profile
        </NavLink>
      </NavItem>
    </Nav>
    )
}

export default Header