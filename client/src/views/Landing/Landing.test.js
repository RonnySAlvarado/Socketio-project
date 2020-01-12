import React from "react";
import { createMemoryHistory } from "history";
import { render, fireEvent } from "@testing-library/react";
import { Router } from "react-router-dom";

import Landing from "./Landing";

test("Changes the history to include the /dashboard route", () => {
  // creates an instance of the history object to pass into the Router component as prop
  const history = createMemoryHistory();
  // Builds the virtual DOM tree and stores it in landingPage so it'll have testing-library methods
  const landingPage = render(
    <Router history={history}>
      <Landing />
    </Router>
  );
  // Grab the anchor node (Link component)
  const button = landingPage.getByText(/enter here/i);
  // Clicks the node
  fireEvent.click(button);
  // Expects an update to the path name to be /dashboard
  expect(history.location.pathname).toBe("/dashboard");
});
