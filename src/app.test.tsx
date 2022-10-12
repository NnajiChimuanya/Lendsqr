import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import App from "./App";
import Dashboard from "../src/pages/Dashboard";

describe("Dashboard", () => {
  test("Should render the sidebar and header", () => {
    const { getByRole, getByTestId } = render(<Dashboard />);

    const dashboard = getByTestId("dashboard");
    const header = getByTestId("header");
    const sidebar = getByTestId("sidebar");

    expect(parent).toContainElement(header);
    expect(parent).toContainElement(sidebar);
  });
});
