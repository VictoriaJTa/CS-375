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
      <div>
        <div style={{ margin: "55px", textAlign: "center" }}>
          <PieChart width={350} height={250} data={stats.party} />
        </div>
        <div style={{ margin: "55px", textAlign: "center" }}>
          <PieChart width={350} height={250} data={stats.chamber} />
        </div>
      </div>
    ); 
  } else return null;

  
}


PieGraph.propTypes = {
  data: PropTypes.any,
}

export default PieGraph;
