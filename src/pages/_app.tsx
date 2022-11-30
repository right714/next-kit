import type { AppType, AppProps } from "next/app";
import "@/styles/custom-props.scss";
import "@/styles/global.scss";
import { DefaultSeo } from "next-seo";

export default (({ Component, pageProps }) => {
  return (
    <>
      <DefaultSeo />
      <Component {...pageProps} />
    </>
  );
}) as AppType<AppProps>;
