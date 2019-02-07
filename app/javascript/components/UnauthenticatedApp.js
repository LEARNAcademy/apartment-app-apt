import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Apartments from './pages/Apartments'

class UnauthenticatedApp extends React.Component {
  render () {
    return (
      <h1>UnauthenticatedApp</h1>
    );
  }
}

export default UnauthenticatedApp
