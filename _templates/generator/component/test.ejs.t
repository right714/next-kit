---
to: src/components/<%= type %>/<%= h.changeCase.pascalCase(name) %>/index.test.tsx
---
import { render } from "@testing-library/react";
import { expect, test } from "vitest";
