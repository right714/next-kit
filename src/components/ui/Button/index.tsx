import { FC } from "react";
import styled from "./style.module.scss";
import classnames from "classnames";

const cx = classnames.bind(styled);

type ButtonProps = {
  children?: React.ReactNode;
};

export default (props => {
  const { children } = props;

  return (
    <button type="button" className={cx(styled.button, "text-red-500")}>
      {children}
    </button>
  );
}) as FC<ButtonProps>;
