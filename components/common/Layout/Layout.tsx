import { Footer, Navbar } from "@components/common";
import React, { ReactNode } from "react";
import styles from "./Layout.module.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.root}>
      <Navbar />
      <main className="fit">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
