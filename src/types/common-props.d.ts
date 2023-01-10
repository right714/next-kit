import { ReactNode } from "react";

declare type CommonProps = {
  id?: string;
  className?: string;
  children?: ReactNode;
};

declare type WithCommonProps<P = object> = P & CommonProps;
