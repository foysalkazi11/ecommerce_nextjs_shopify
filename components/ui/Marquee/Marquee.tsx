import React, { FC, ReactNode } from "react";
import s from "./Marquee.module.css";
import Ticker from "react-ticker";

interface Props {
  children: ReactNode[];
  varient?: "A" | "B";
}

const Marquee: FC<Props> = ({ children, varient = "A" }) => {
  return (
    <div className={`${s.root} ${s[varient]}`}>
      <Ticker offset={80}>
        {() => <div className={s.container}>{children}</div>}
      </Ticker>
    </div>
  );
};

export default Marquee;
