import { NextPage, NextPageContext } from "next";
import { NextSeo } from "next-seo";

export default (() => {
  return (
    <>
      <NextSeo />
      <h1>Hello World.</h1>
    </>
  );
}) as NextPage<NextPageContext>;
