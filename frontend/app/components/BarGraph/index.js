/**
 *
 * BarGraph
 *
 */

import React from "react";
import PropTypes from 'prop-types';
import { BarChart, BarSeries, Bar } from "reaviz";

function BarGraph ({stats, loading, error}) {

  if (stats !== false) {
    return (
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="graph">
            <div className="graph__title">Subject</div>
            <div className="graph__content">
              <div style={{ width: '100%', height: '250px' }}>
                <BarChart 
                  data={stats.subject} 
                  series={
                    <BarSeries
                      bar={
                        <Bar
                          gradient={null}
                          rounded={false}
                        />
                      }
                    />
                  }
                />
              </div>
            </div>
          </div>          
        </div>
        <div className="col-12 col-md-6">
          <div className="graph">
            <div className="graph__title">Vote Results</div>
            <div className="graph__content">
              <div style={{ width: '100%', height: '250px' }}>
                <BarChart 
                  data={stats.vote_result} 
                  series={
                    <BarSeries
                      bar={
                        <Bar
                          gradient={null}
                          rounded={false}
                        />
                      }
                    />
                  }
                />
              </div>            
            </div>
          </div>
        </div>
      </div>
    ); 
  } else return null;

  
}


BarGraph.propTypes = {
  stats: PropTypes.any,
  loading: PropTypes.bool,
  error: PropTypes.any,
}

export default BarGraph;