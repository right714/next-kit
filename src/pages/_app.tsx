import "@/styles/custom-props.scss";
import "windi.css";

import type { AppProps, AppType } from "next/app";
import { DefaultSeo } from "next-seo";

export default (({ Component, pageProps }) => {
  return (
    <>
      <DefaultSeo />
      <Component {...pageProps} />
    </>
  );
}) as AppType<AppProps>;
