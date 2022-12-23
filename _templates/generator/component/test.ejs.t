---
to: "<%= useTest ? `src/components/${type}/${h.changeCase.pascalCase(name)}/index.test.tsx` : null %>"
---
import { render } from "@testing-library/react";
import { expect, test } from "vitest";
