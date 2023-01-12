import { FC, SVGProps } from "react";

declare module "*.svg" {
  export const content: FC<SVGProps<SVGElement>>;
}
