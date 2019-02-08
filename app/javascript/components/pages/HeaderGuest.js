import React, { Component } from 'react'
import PropTypes from "prop-types"

import { Nav, NavItem, Navbar, NavLink } from 'reactstrap'

class HeaderGuest extends Component {

  render () {
    return (
      <div>
        <Navbar>
          <Nav>
            <NavLink href="/guest/apartments">Apartment List</NavLink>
            <NavLink href="/member/signin">Sign In</NavLink>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default HeaderGuest
