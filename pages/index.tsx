import type { InferGetStaticPropsType } from "next";
import getAllProducts from "@framework/product/getallProcts";
import { getConfig } from "@framework/api/config";
import { Layout } from "@components/common";
import { ProductCard } from "@components/product";
import { Grid } from "@components/ui";

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
    <Grid>
      {products?.slice(0, 3)?.map((product) => (
        <ProductCard product={product} key={product?.id} />
      ))}
    </Grid>
  );
};

Home.Layout = Layout;

export default Home;
