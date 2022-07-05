import React, { ComponentType, FC, HTMLAttributes, ReactNode } from "react";

interface Props {
  children: ReactNode | ReactNode[];
  EL?: ComponentType<HTMLAttributes<HTMLElement>>;
}

const Container: FC<Props> = ({ children, EL = "div" }) => {
  return <EL className="px-6 m-auto max-w-8xl">{children}</EL>;
};

export default Container;
