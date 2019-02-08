import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Apartments from './pages/Apartments'
import HeaderGuest from './pages/HeaderGuest'

class UnauthenticatedApp extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <HeaderGuest />
          <p>I am guest page</p>
          <Switch>
            <Route path="/guest/apartments" component={Apartments} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default UnauthenticatedApp
