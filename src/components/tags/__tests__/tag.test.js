import Active from "../Active";
import Blacklist from "../Blacklist";
import Pending from "../Pending";
import Inactive from "../Inactive";
import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("renders The appropriate  tag", () => {
  render(<Active />);
  render(<Blacklist />);
  render(<Pending />);
  render(<Inactive />);

  const activeTag = screen.getByTestId("test-active");
  const blacklist = screen.getByTestId("test-blacklist");
  const pending = screen.getByTestId("test-pending");
  const inactive = screen.getByTestId("test-inactive");

  expect(activeTag).toHaveTextContent("Active");
  expect(blacklist).toHaveTextContent("Blacklist");
  expect(pending).toHaveTextContent("Pending");
  expect(inactive).toHaveTextContent("Inactive");
});
