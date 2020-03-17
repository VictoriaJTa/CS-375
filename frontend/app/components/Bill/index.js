import React from 'react'
import { Fragment } from 'react'

export default class Bill extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    let d = new Date(this.props.data.last_vote);
    return (
      <Fragment>
        <div className="bill">
          <div className="bill__header">
            <h3 className="row bill__title">
              <span className="col-12 col-md-2 title__code">{this.props.data.bill}</span>
              <span className="col-12 col-md-10 title">{this.props.data.short_title}</span>
            </h3>
            <p className="bill__summary">{this.props.data.summary}</p>
          </div>

          <div className="bill__vote">
            <span>Last Vote</span>
            <span>{d.toDateString()}</span>
          </div>

          <div className="bill__link">
            <a href={this.props.data.congress_gov_uri} target="_blank">
              <span className="link__text">More information on Congress.gov</span> 
              <i className="material-icons">call_made</i>
            </a>
          </div>

          <div className="row no-gutters bill__details">
            <div className="col-6 col-md-5 detail">
              <span className="detail__label">Sponsor</span>
              <span className="detail__value">{this.props.data.sponsor_first_name} {this.props.data.sponosor_last_name}</span>
            </div>

            <div className="col-6 col-md-2 detail">
              <span className="detail__label">State</span>
              <span className="detail__value">{this.props.data.sponsor_state}</span>
            </div>

            <div className="col-6 col-md-2 detail">
              <span className="detail__label">Party</span>
              <span className="detail__value">{this.props.data.sponsor_party}</span>

            </div>

            <div className="col-6 col-md-3 detail">
              <span className="detail__label">Chamber</span>
              <span className="detail__value">{this.props.data.chamber.charAt(0).toUpperCase() + this.props.data.chamber.slice(1)}</span>
            </div>        
          </div>
        </div>
        <div className="col-12 bill__expand">
          <i className="material-icons">arrow_drop_down</i> 
          <span>EXPAND</span>
        </div>
      </Fragment>
    );
  }
}
