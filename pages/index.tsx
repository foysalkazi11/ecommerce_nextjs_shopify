import type { InferGetStaticPropsType } from "next";
import styles from "../styles/Home.module.css";
import getAllProducts from "@framework/product/getallProcts";
import { getConfig } from "@framework/api/config";

export const getStaticProps = async () => {
  const config = getConfig();
  const products = await getAllProducts(config);
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
