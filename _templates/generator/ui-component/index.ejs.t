---
to: src/components/ui/<%= name %>/index.tsx
---
import { FC, ComponentPropsWithoutRef } from "react";
import styled from "./style.module.scss";

type Props = ComponentPropsWithoutRef<"div">;

export default (() => {
  return (
    <div>UI Component</div>
  );
}) as FC<Props>;
