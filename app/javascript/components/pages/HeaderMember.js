import React, { Component } from 'react'
import PropTypes from "prop-types"

import { Nav, NavItem, Navbar, NavLink } from 'reactstrap'

class HeaderMember extends Component {

  render () {
    return (
      <div>
        <Navbar>
          <Nav>
            <NavLink href="/member/apartments">Apartment List</NavLink>
            <NavLink href="/member/logout">Log Out</NavLink>
            <NavLink href="/member/new-apartment">Add New Apartment</NavLink>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default HeaderMember
