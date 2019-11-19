// module imports
import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const Linegraph = ({ data, threshold }) => {
  const [lineData, setLineData] = useState([]);
  /*
  1) This is the incoming array "data" & an integer "threshold" (initial value as null) as props. "Data" is an array of objects containing value 
  and timestamp as keys utilizing the Recharts.js package to use their components to render data. 
  2) The Line component is referencing "value" and "thresholdVal" within the dataKey prop to plot the points and connect. 
  3) Since the LineChart component actually needs to use only 1 data set, we had to combine both the threshold and the data array together,
  which is found in our useEffect and stored in local state as "lineData". 
  4) When data or threshold changes, it will re-run to plot the points correctly.
  */

  useEffect(() => {
    const dataWithThreshold = data.map(point => {
      return { ...point, thresholdVal: threshold };
    });
    setLineData(dataWithThreshold);
  }, [data, threshold]);

  return (
    <ResponsiveContainer height={300} width="100%">
      <LineChart data={lineData}>
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
        <Line type="monotone" dataKey="thresholdVal" stroke="red" dot={false} />
        <CartesianGrid stroke="black" strokeDasharray="5 5" />
        <XAxis dataKey="timestamp" stroke="black" />
        <YAxis stroke="black" />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Linegraph;
