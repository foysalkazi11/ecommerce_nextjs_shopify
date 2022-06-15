import React, { FC, ReactNode } from "react";
import styles from "./Grid.module.css";

interface Childern {
  children: ReactNode;
}

const Grid: FC<Childern> = ({ children }) => {
  return <div className={styles.gridContainer}>{children}</div>;
};

export default Grid;
