// module imports
import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import Loader from "react-loader-spinner";

// file imports
import Linegraph from "./Linegraph";
import Bargraph from "./Bargraph";

const Dashboard = () => {
  const [socketUrl, setSocketUrl] = useState("http://localhost:5000");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const socket = socketIOClient(socketUrl);
    // This will look for the event that's being emitted called "data" -> emphasis that the string MUST match was is listed in the backend
    socket.on("data", res => {
      /* This takes the existing timestamp received from the payload and converts to the following: 
      1) The .toTimeString() converts to => 23:15:30 GMT+0200 (CEST)
      2) The split(' ') is splitting that string into an array at every space where it would be ["23:15:30", "GMT+0200", "(Central", "Standard", "Time)"]
      3) Since we don't need the last 4 elements in the array and just the first 1, we'll grab that.
      */
      res.timestamp = new Date(res.timestamp).toTimeString().split(" ")[0];
      // Spreading existing data and adding the response to the end of it
      setData([...data, res]);
      if (loading) {
        setLoading(false);
      }
    });

    return () => {
      socket.close(); // clean up for when we disconnect
    };
  }, [data]);

  if (loading) {
    return (
      <Loader type="BallTriangle" color="#00BFFF" height={100} width={100} />
    );
  } else {
    return (
      <div>
        <Linegraph data={data} />
        <Bargraph data={data} />
      </div>
    );
  }
};

export default Dashboard;
