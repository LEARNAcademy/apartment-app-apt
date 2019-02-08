import React from "react"
import PropTypes from "prop-types"
 import {
     BrowserRouter as Router,
     Route,
     Switch,
   } from 'react-router-dom'
import { Nav, NavItem, NavLink } from 'reactstrap'

import Apartments from './pages/Apartments'
import HeaderMember from './pages/HeaderMember'

class AuthenticatedApp extends React.Component {
  render () {
    return (
     <Router>
       <div>
        <HeaderMember />
        <p>I am member page</p>
         <Switch>
           <Route path="/member/apartments" component={Apartments} />
         </Switch>
       </div>
     </Router>
    );
  }
}

export default AuthenticatedApp
