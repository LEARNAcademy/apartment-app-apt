import React from "react"
import PropTypes from "prop-types"

class Apartments extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      apartments: []
    }
  }


  render () {
    return (
      <div>
        <h1>Apartment List</h1>
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Street</th>
                <th>Street</th>
                <th>City</th>
                <th>State</th>
                <th>Country</th>
                <th>Postal Code</th>
              </tr>
                {this.state.apartments.map((a, i) => {
                  return(
                      <tr key={i}>
                        <td>{a.name}</td>
                        <td>{a.street_1}</td>
                        <td>{a.street_2}</td>
                        <td>{a.city}</td>
                        <td>{a.state}</td>
                        <td>{a.country}</td>
                        <td>{a.postal_code}</td>
                      </tr>
                  )
                })}
            </tbody>
          </table>
      </div>
    );
  }
}
export default Apartments
