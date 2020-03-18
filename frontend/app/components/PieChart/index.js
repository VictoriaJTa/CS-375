/**
 *
 * PieChart
 *
 */

import React from "react";
import { PieChart } from "reaviz";

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
    <PieChart width={350} height={250} data={data} displayAllLabels={true} />
    </div>
  );

