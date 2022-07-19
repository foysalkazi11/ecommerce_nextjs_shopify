import "../styles/globals.css";
import type { AppProps } from "next/app";
import { FC, ReactNode } from "react";
import { UIProvider } from "@components/ui/context";

interface Children {
  children: ReactNode;
}

const Noop = ({ children }: Children) => <>{children}</>;

function MyApp({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: FC<Children> } }) {
  const Layout = Component.Layout ?? Noop;
  return (
    <UIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UIProvider>
  );
}

export default MyApp;
