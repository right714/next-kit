---
to: src/components/<%= type %>/<%= h.changeCase.pascalCase(name) %>/index.tsx
---
import { ComponentPropsWithoutRef, FC } from "react";

import styled from "./style.module.scss";

type Props = ComponentPropsWithoutRef<"div">;

export default ((props) => {
  const { children, className, ...attr } = props;

  return (
    <div {...attr}>{children}</div>
  );
}) as FC<Props>;
