import React from "react";
import { render } from "@testing-library/react";

import Bargraph from "./Bargraph";

describe("<Bargraph />", () => {
  it("Matches snapshot", () => {
    const data = [
      {
        value: 60,
        timestamp: new Date(Date.now() + 5000).toTimeString().split(" ")[0]
      },
      {
        value: 30,
        timestamp: new Date(Date.now() + 10000).toTimeString().split(" ")[0]
      },
      {
        value: -50,
        timestamp: new Date(Date.now() + 15000).toTimeString().split(" ")[0]
      }
    ];
    const graph = render(<Bargraph data={data} />);
    expect(graph).toMatchSnapshot();
  });
});
