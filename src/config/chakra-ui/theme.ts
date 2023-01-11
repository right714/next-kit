import { extendTheme } from "@chakra-ui/react";

import { toDesktop, toTablet } from "@/config/style/break-points";

const breakpoints = {
  tablet: `${toTablet}px`,
  desktop: `${toDesktop}px`,
};

export const theme = extendTheme({ breakpoints });
