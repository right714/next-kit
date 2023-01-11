import { toDesktop, toTablet } from "@/config/style/break-points";

const mq: { [key: string]: string } = {
  tablet: `@media (min-width: ${toTablet}px)`,
  desktop: `@media (min-width: ${toDesktop}px)`,
};

export { mq };
