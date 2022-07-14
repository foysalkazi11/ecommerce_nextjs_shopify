import "../styles/globals.css";
import type { AppProps } from "next/app";
import { FC, ReactNode } from "react";
import { UIProvider } from "@components/ui/context";

interface Childern {
  children: ReactNode;
}

const Noop = ({ children }: Childern) => <>{children}</>;

function MyApp({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: FC<Childern> } }) {
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
