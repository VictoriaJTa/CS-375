/**
 *
 * PieChart
 *
 */

import React from "react";
import { PieChart } from "reaviz";

import PropTypes from 'prop-types';

function PieGraph ({stats, loading, error}) {
  console.log(stats);

  if (stats !== false) {
    return (
      <div style={{ margin: "55px", textAlign: "center" }}>
        <PieChart width={350} height={250} data={stats.party} />
      </div>
    ); 
  } else return null;

  
}


PieGraph.propTypes = {
  data: PropTypes.any,
}

export default PieGraph;
