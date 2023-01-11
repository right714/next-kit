---
to: src/pages/<%= path %>.tsx
---
import { NextPage, NextPageContext } from "next";
<% if (hasMeta) { -%>
import { NextSeo } from "next-seo";
<% } -%>

export default (() => {
  return (
    <>
<% if (hasMeta) { -%>      <NextSeo /><% } -%>
    </>
  );
}) as NextPage<NextPageContext>;