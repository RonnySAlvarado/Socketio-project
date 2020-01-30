import React from "react";
import { render } from "@testing-library/react";

import Dashboard from "./Dashboard";

describe("<Dashboard />", () => {
  it("Matches snapshot", () => {
    const dashboard = render(<Dashboard />);
    expect(dashboard).toMatchSnapshot();
  });
});
