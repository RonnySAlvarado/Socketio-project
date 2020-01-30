import React from "react";
import { render } from "@testing-library/react";

import Linegraph from "./Linegraph";

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

describe("<Linegraph />", () => {
  it("Matches snapshot", () => {
    const graph = render(<Linegraph data={data} />);
    expect(graph).toMatchSnapshot();
  });
});
