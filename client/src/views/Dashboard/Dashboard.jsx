// module imports
import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import Loader from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// file imports
import Linegraph from "../../components/Linegraph/Linegraph";
import Bargraph from "../../components/Bargraph/Bargraph";
import Threshold from "../../components/Threshold/Threshold";
import { DashboardContainer, LoaderContainer } from "./DashboardStyle";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [threshold, setThreshold] = useState(null);

  const socketUrl = "https://websocket-backend1.herokuapp.com/";

  useEffect(() => {
    /*
      This is the configuration of the toast/snackbar. First we have to check a few conditions before receiving the error:
      1) There must be something inside data. Hence why we check for length.
      2) Don't worry about threshold if the value is null. 
      3) If threshold has a number, compare it with the last value that came in from the data array. 
      If that value is greater than the threshold, render the toast.
    */
    if (
      data.length > 0 &&
      threshold !== null &&
      data[data.length - 1].value > threshold
    ) {
      toast.error(
        <>
          <h3>Warning: Threshold exceeded.</h3>
          <h3>{`Value: ${data[data.length - 1].value}`}</h3>
        </>,
        {
          position: toast.POSITION.BOTTOM_RIGHT
        }
      );
    }
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
      /* By default, the Loader component will be rendered as the initial state for it is true. Once we have received some data,
      loading will be set to false and will render out the chart components.
      */
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
      <LoaderContainer>
        <Loader type="BallTriangle" color="#00BFFF" height={100} width={100} />
      </LoaderContainer>
    );
  } else {
    return (
      <>
        <DashboardContainer>
          <Threshold setThreshold={setThreshold} />
          <Linegraph data={data} threshold={threshold} />
          <Bargraph data={data} />
        </DashboardContainer>
        <ToastContainer autoClose={3000} hideProgressBar={true} />
      </>
    );
  }
};

export default Dashboard;
