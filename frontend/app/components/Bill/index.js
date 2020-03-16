import React from 'react'

export default class Bill extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    console.log(this.props.data);
    let d = new Date(this.props.data.last_vote);
    return (
      <div>
        <div>
          <h3>{this.props.data.bill} - {this.props.data.short_title}</h3>
          <p>{this.props.data.summary}</p>
        </div>
        <div>
          <h4>Last Vote</h4>
          <p>{d.toDateString()}</p>
        </div>
        <div>
          <a href={this.props.data.congress_gov_uri} target="_blank">More information on Congress.gov</a>
        </div>
        <div>
          <h5>Sponsor</h5>
          <p>{this.props.data.sponsor_first_name} {this.props.data.sponosor_last_name}</p>
          <h5>State</h5>
          <p>{this.props.data.sponsor_state}</p>
          <h5>Party</h5>
          <p>{this.props.data.sponsor_party}</p>
          <h5>Chamber</h5>
          <p>{this.props.data.chamber.charAt(0).toUpperCase() + this.props.data.chamber.slice(1)}</p>
        </div>
      </div>
    );
  }
}
