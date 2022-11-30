import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import Button from "./";

test("Button", () => {
  const { container } = render(<Button>ボタン</Button>);

  expect(container).toMatchSnapshot();
});
