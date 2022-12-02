import { render } from "@testing-library/react";
import { expect, test } from "vitest";

import Button from "./";

test("Button", () => {
  const { container } = render(<Button>ボタン</Button>);

  expect(container).toMatchSnapshot();
});
