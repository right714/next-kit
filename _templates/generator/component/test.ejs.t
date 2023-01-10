---
to: "<%= useTest ? `src/components/${type}/${h.changeCase.pascalCase(name)}/index.test.tsx` : null %>"
---
import { render } from "@testing-library/react";
import { expect, test } from "vitest";

import <%= h.changeCase.pascalCase(name) %> from "./";

test("<%= h.changeCase.pascalCase(name) %>", () => {
  const { container } = render(<<%= h.changeCase.pascalCase(name) %> />);

  expect(container).toMatchSnapshot();
});
