import { ReactNode } from "react";

declare type CommonProps<P = object> = P & {
  id?: string;
  className?: string;
  children?: ReactNode;
};
