import "../styles/globals.css";
import type { AppProps } from "next/app";
import { FC, ReactNode } from "react";

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
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
