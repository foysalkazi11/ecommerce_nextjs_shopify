import type { InferGetStaticPropsType } from "next";
import getAllProducts from "@framework/product/getallProcts";
import { getConfig } from "@framework/api/config";
import { Layout } from "@components/common";

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
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {JSON?.stringify(products)}
    </div>
  );
};

Home.Layout = Layout;

export default Home;
