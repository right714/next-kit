---
to: src/components/feature/<%= name %>/index.tsx
---
import { ComponentPropsWithoutRef, FC } from "react";

import styled from "./style.module.scss";

type Props = ComponentPropsWithoutRef<"div">;

export default (() => {
  return (
    <div>Feature Component</div>
  );
}) as FC<Props>;
