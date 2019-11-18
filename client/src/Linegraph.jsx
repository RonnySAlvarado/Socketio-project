// module imports
import React, { useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

const Linegraph = ({ data }) => {
  const [loading, setLoading] = useState(true);
  // This is the incoming array data as props with objects containing value and timestamp as keys
  // Utilizing the Recharts.js package to use their components to render data
  // The Line component is referencing "value" within the dataKey prop to plot the points and connect
  // The XAxis component is referencing "timestamp" within the dataKey prop to show the values of the timestamp on the x-axis

  return (
    <LineChart width={800} height={300} data={data}>
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
      <CartesianGrid stroke="black" strokeDasharray="5 5" />
      <XAxis dataKey="timestamp" stroke="black" />
      <YAxis stroke="black" />
      <Tooltip />
    </LineChart>
  );
};

export default Linegraph;
