import React, { ReactNode } from "react";
import styles from "./Layout.module.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.root}>
      <main className="fit">{children}</main>
    </div>
  );
};

export default Layout;
