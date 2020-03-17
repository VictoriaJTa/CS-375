import React from 'react'
import Bill from '../Bill'

export default class BillList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      bills: []
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
      <ul className="row no-gutters bill-list">
      {this.state.bills.map((value, index) => {
        return <li className="col-12" key={index}><Bill data={value} /></li>
      })}
      </ul>
    );
  }
}
