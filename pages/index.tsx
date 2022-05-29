import type { NextPage, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export const getStaticProps = () => {
  const products = [1, 2, 3];
  return {
    props: {
      products,
    },
    revalidate: 1 * 60,
  };
};

const Home = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <div className={styles.container}>{products?.toString()}</div>;
};

export default Home;
