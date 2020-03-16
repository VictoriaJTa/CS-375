import React from 'react'
import Bill from '../Bill'

export default class BillList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      bills: [1, 2, 3]
    }

    fetch('http://localhost:8080/bill')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.setState({
        bills: data.bills
      })
    });
  }

  render () {
    return (
      <ul>
      {this.state.bills.map((value, index) => {
        return <li key={index}><Bill /></li>
      })}
      </ul>
    );
  }
}
