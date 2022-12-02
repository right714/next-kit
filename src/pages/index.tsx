import { NextPage, NextPageContext } from "next";
import { NextSeo } from "next-seo";

import Button from "@/ui/Button";

export default (() => {
  return (
    <>
      <NextSeo />
      <h1 className="text-center">Hello World.</h1>
      <Button>ボタンです</Button>
    </>
  );
}) as NextPage<NextPageContext>;
