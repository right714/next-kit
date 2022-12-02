import classnames from "classnames";
import { FC, ReactNode } from "react";

import styled from "./style.module.scss";

const cx = classnames.bind(styled);

type ButtonProps = {
  children?: ReactNode;
};

export default (props => {
  const { children } = props;

  return (
    <button type="button" className={cx(styled.button, "text-red-500")}>
      {children}
    </button>
  );
}) as FC<ButtonProps>;
