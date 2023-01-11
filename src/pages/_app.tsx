import "@/styles/custom-props.scss";

import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps, AppType } from "next/app";
import { DefaultSeo } from "next-seo";

import { theme } from "@/config/chakra-ui/theme";

export default (({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <DefaultSeo />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}) as AppType<AppProps>;
