---
to: src/components/<%= type %>/<%= h.changeCase.pascalCase(name) %>/index.tsx
---
<% if (type === "atoms") { %>import { ComponentPropsWithoutRef, FC } from "react";
<% } else { %>import { FC } from "react";

import { WithCommonProps } from "@/types/common-props";
<% } %>
import styled from "./style.module.scss";
<% if (type === "atoms") { %>
type <%= h.changeCase.pascalCase(name) %>Props = ComponentPropsWithoutRef<"div">;
<% } else { %>
type <%= h.changeCase.pascalCase(name) %>Props = WithCommonProps;
<% } %>
const <%= h.changeCase.pascalCase(name) %>: FC<<%= h.changeCase.pascalCase(name) %>Props> = ((props) => {
  const { children, ...attr } = props;

  return (
    <div {...attr}>{children}</div>
  );
});

export default <%= h.changeCase.pascalCase(name) %>;