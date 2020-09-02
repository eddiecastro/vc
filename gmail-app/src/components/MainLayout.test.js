import React from "react";
import { render } from "@testing-library/react";

import { MainLayout } from ".";

test("it renders the component", () => {
  const { container } = render(<MainLayout />);
  expect(container.firstChild).toMatchSnapshot();
});
