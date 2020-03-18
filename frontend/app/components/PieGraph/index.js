/**
 *
 * PieChart
 *
 */

import React from "react";
import { PieChart } from "reaviz";

import PropTypes from 'prop-types';

function PieGraph ({stats, loading, error}) {
  if (loading) {
    return <div className="loader"></div>;
  }

  if (error) {
    return <div><p>Something went wrong</p></div>
  }

  if (stats !== false) {
    return (
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="graph">
            <div className="graph__title">Party</div>
            <div className="graph__content">
              <div style={{ width: '100%', height: '250px' }}>
                <PieChart data={stats.party} />
              </div>            
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="graph">
            <div className="graph__title">Chamber</div>
            <div className="graph__content">
              <div style={{ width: '100%', height: '250px' }}>
                <PieChart data={stats.chamber} />
              </div>                
            </div>
          </div>
        </div>
      </div>
    ); 
  } else return null;

  
}


PieGraph.propTypes = {
  data: PropTypes.any,
}

export default PieGraph;
