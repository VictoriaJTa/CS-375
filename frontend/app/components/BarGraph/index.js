/**
 *
 * BarGraph
 *
 */

import React from "react";
import PropTypes from 'prop-types';
import { BarChart } from "reaviz";

// function Bar(props){
//   const {data} = props;

//   return (
//     <div style={{ margin: "55px", textAlign: "center" }}>
//       <BarChart width={350} height={250} data={data} />
//     </div>
//   );
// };

// Bar.propTypes = [
//     {
//       key: "Dem",
//       data: 283
//     },
//     {
//       key: "Ind",
//       data: 3
//     },
//     {
//       key: "Rep",
//       data: 258
//     }
//   ];

// export default Bar;


export const data = [
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

export default () => (
    <div style={{ margin: "55px", textAlign: "center" }}>
      <BarChart width={350} height={250} data={data} />
    </div>
  );
