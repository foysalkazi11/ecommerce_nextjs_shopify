import React, { FC, ReactNode } from "react";
import styles from "./Grid.module.css";

interface Childern {
  children: ReactNode;
  layout?: "A" | "B";
}

const Grid: FC<Childern> = ({ children, layout = "A" }) => {
  return (
    <div
      className={`${styles.gridContainer} ${
        layout === "A" ? styles.layoutA : styles.layoutB
      }`}
    >
      {children}
    </div>
  );
};

export default Grid;
