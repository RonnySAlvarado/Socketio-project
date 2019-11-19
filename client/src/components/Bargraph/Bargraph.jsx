// module imports
import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const Bargraph = ({ data }) => {
  // Per the Recharts "SimpleBarChart" example -> http://recharts.org/en-US/examples/SimpleBarChart
  const [count, setCount] = useState([
    {
      name: "-100, -90",
      value: 0
    },
    {
      name: "-90, -80",
      value: 0
    },
    {
      name: "-80, -70",
      value: 0
    },
    {
      name: "-70, -60",
      value: 0
    },
    {
      name: "-60, -50",
      value: 0
    },
    {
      name: "-50, -40",
      value: 0
    },
    {
      name: "-40, -30",
      value: 0
    },
    {
      name: "-30, -20",
      value: 0
    },
    {
      name: "-20, -10",
      value: 0
    },
    {
      name: "-10, 0",
      value: 0
    },
    {
      name: "0, 10",
      value: 0
    },
    {
      name: "10, 20",
      value: 0
    },
    {
      name: "20, 30",
      value: 0
    },
    {
      name: "30, 40",
      value: 0
    },
    {
      name: "40, 50",
      value: 0
    },
    {
      name: "50, 60",
      value: 0
    },
    {
      name: "60, 70",
      value: 0
    },
    {
      name: "70, 80",
      value: 0
    },
    {
      name: "80, 90",
      value: 0
    },
    {
      name: "90, 100",
      value: 0
    }
  ]);

  /*This may not be the most optimal way of doing it simply because we're looping over the "count" array with the intent of just finding only one with the
  correct "name" value. The problem is that even when we find the only one, we still continue to finish the rest of the loop despite knowing it will not find 
  another one with the same name. This will be handled differently in the future. I'm thinking of something with the find() javascript array method. */

  useEffect(() => {
    if (data.length === 0) {
      console.log("Loading...please wait");
    } else {
      /*Few things to note:
    1) We have a count array simply because this graph is strictly trying to count (y-axis) how many times it is within a specific range (x-axis).

    2) Currently, the "name" key shown above is done this way for 2 reasons: To list the name below the X-axis, but also so I can split the string into 2 separate numbers 
    in order to make comparisons.

    3) We loop over the "count" array. For each element in that array, we split the "name" into 2 separate numbers which will be stored in a variable called range. Because
    there will only ever be 2 elements inside each range array, we can refer to the first number as range[0] and the second number as range[1] 

    4) Since data is going to be changing often, we don't have to evaluate every single element in the data array, but rather just the last new data that came in.
    Because of this, we're going to make a comparison. We'll compare the value of the data that JUST came in and see if it is within the range of range[0] and range[1]. 
    If it is within that range, we'll modify that particular object's value and return it to the "result" array. If it is not within the range of range[0] and range[1], 
    we will just simply return the object untouched.

    5) Once the "result" array is finalized, we will simply set the state with the new results.  */

      const result = count.map(bar => {
        const range = bar.name.split(", ");
        if (
          data[data.length - 1].value >= parseInt(range[0]) &&
          data[data.length - 1].value <= parseInt(range[1])
        ) {
          return { ...bar, value: ++bar.value };
        } else {
          return bar;
        }
      });
      setCount(result);
    }
  }, [data]);

  return (
    <ResponsiveContainer height={300} width="100%">
      <BarChart data={count}>
        <XAxis stroke="black" dataKey="name" />
        <YAxis stroke="black" />
        <Tooltip />
        <Legend margin="20px" />
        <Bar type="monotone" dataKey="value" barSize={30} fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Bargraph;
