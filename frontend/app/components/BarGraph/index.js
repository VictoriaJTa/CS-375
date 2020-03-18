/**
 *
 * BarGraph
 *
 */

import React from "react";
import PropTypes from 'prop-types';
import { BarChart } from "reaviz";

function BarGraph ({stats, loading, error}) {

  if (stats !== false) {
    return (
      <div>
        <div style={{ margin: "55px", textAlign: "center" }}>
          <BarChart width={350} height={250} data={stats.subject} />
        </div>
        <div style={{ margin: "55px", textAlign: "center" }}>
          <BarChart width={350} height={250} data={stats.vote_result} />
        </div>
      </div>
    ); 
  } else return null;

  
}


BarGraph.propTypes = {
  data: PropTypes.any,
}

export default BarGraph;