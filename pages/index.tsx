import type { NextPage, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import getAllProducts from "../framework/shopify/getallProcts";

export const getStaticProps = async () => {
  const products = await getAllProducts();
  return {
    props: {
      products,
    },
    revalidate: 1 * 60,
  };
};

const Home = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <div className={styles.container}>{JSON?.stringify(products)}</div>;
};

export default Home;
