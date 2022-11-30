---
to: src/pages/<%= path %>.tsx
---
import { NextPage } from "next";
<% if (hasMeta) { -%>
import { NextSeo } from "next-seo";
<% } -%>

type PageProps = {};

export default (() => {
  return (
    <>
      <% if (hasMeta) { -%><NextSeo />
<% } -%>
    </>
  );
}) as NextPage<PageProps>;