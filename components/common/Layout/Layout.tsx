import { CartSidebar } from "@components/cart";
import { Footer, Navbar } from "@components/common";
import { Sidebar } from "@components/ui";
import React, { FC, ReactNode } from "react";
import styles from "./Layout.module.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <div className={styles.root}>
      <Sidebar>
        <CartSidebar />
      </Sidebar>
      <Navbar />
      <main className="fit">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
