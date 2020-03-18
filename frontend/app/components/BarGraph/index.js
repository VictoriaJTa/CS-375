/**
 *
 * BarGraph
 *
 */

import React from "react";
//import PropTypes from 'prop-types';
import { BarChart } from "reaviz";

const dataIn = [
  {
    key: "Dem",
    data: 283
  },
  {
    key: "Ind",
    data: 3
  },
  {
    key: "Rep",
    data: 258
  }
];


function Bar(dataIn){
  console.log(dataIn)
  return (
    <div style={{ margin: "55px", textAlign: "center" }}>
      <BarChart width={350} height={250} data={dataIn} />
    </div>
  );
};

// export default () => (
//     <div style={{ margin: "55px", textAlign: "center" }}>
//       <BarChart width={350} height={250} data={data} />
//     </div>
//   );

export default Bar(dataIn);
