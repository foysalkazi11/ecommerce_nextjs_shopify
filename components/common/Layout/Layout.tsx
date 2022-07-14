import { CartSidebar } from "@components/cart";
import { Footer, Navbar } from "@components/common";
import { Sidebar } from "@components/ui";
import { useUIContext } from "@components/ui/context";
import React, { ReactNode } from "react";
import styles from "./Layout.module.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const state = useUIContext();
  return (
    <div className={styles.root}>
      <Sidebar
        isOpenSidebar={state?.isOpenSidebar}
        toggleSidebar={state?.toggleSidebar}
      >
        <CartSidebar />
      </Sidebar>
      <Navbar toggleSidebar={state?.toggleSidebar} />
      <main className="fit">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
