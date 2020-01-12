import React from "react";
import { createMemoryHistory } from "history";
import { render, fireEvent } from "@testing-library/react";
import { Router } from "react-router-dom";

import Landing from "./Landing";

test("Some comments here", () => {
  const history = createMemoryHistory();
  const landingPage = render(
    <Router history={history}>
      <Landing />
    </Router>
  );
  const button = landingPage.getByText(/enter here/i);
  fireEvent.click(button);
  expect(history.location.pathname).toBe("/dashboard");
});
