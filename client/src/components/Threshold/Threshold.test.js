import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Threshold from "./Threshold";

describe("<Threshold />", () => {
  it("Matches snapshot", () => {
    const setThresholdMock = jest.fn();
    const threshold = render(<Threshold setThreshold={setThresholdMock} />);
    expect(threshold).toMatchSnapshot();
  });
  it("Changes input values", () => {
    const setThresholdMock = jest.fn();
    const threshold = render(<Threshold setThreshold={setThresholdMock} />);
    const inputNode = threshold.getByPlaceholderText(
      /Enter a threshold between -100 and 100/i
    );
    fireEvent.change(inputNode, { target: { value: "50" } });
    expect(inputNode.value).toBe("50");
    fireEvent.change(inputNode, { target: { value: "75" } });
    expect(inputNode.value).toBe("75");
    fireEvent.change(inputNode, { target: { value: "-50" } });
    expect(inputNode.value).toBe("-50");
  });
  it("Submits the threshold", () => {
    const setThresholdMock = jest.fn();
    const threshold = render(<Threshold setThreshold={setThresholdMock} />);
    const submitButton = threshold.getByText(/Submit Threshold/i);
    fireEvent.click(submitButton);
    expect(setThresholdMock).toHaveBeenCalledTimes(1);
  });
  it("Removes the threshold", () => {
    const setThresholdMock = jest.fn();
    const threshold = render(<Threshold setThreshold={setThresholdMock} />);
    const removeButton = threshold.getByText(/Remove Threshold/i);
    fireEvent.click(removeButton);
    expect(setThresholdMock).toHaveBeenCalledTimes(1);
  });
});
