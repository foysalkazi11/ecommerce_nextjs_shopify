import type { InferGetStaticPropsType } from "next";
import getAllProducts from "@framework/product/getallProcts";
import { getConfig } from "@framework/api/config";
import { Layout } from "@components/common";
import { ProductCard } from "@components/product";
import { Grid, Hero, Marquee } from "@components/ui";

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
    <>
      <Grid>
        {products?.slice(0, 3)?.map((product) => (
          <ProductCard product={product} key={product?.id} />
        ))}
      </Grid>
      <Hero
        discripation="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec mattis dui. Fusce purus arcu, mollis in dui id, lobortis tempor risus. Ut scelerisque ligula eget aliquam tempus. Mauris nec mauris lobortis lorem cursus commodo vel eget quam. Vivamus a dictum lacus."
        headline="Lorem ipsum dolor sit amet"
      />
      <Marquee varient="B">
        {products?.slice(0, 3)?.map((product) => (
          <ProductCard varient="slim" product={product} key={product?.id} />
        ))}
      </Marquee>

      <Grid layout="B">
        {products?.slice(0, 3)?.map((product) => (
          <ProductCard product={product} key={product?.id} />
        ))}
      </Grid>
      <Marquee varient="A">
        {products?.slice(0, 3)?.map((product) => (
          <ProductCard varient="slim" product={product} key={product?.id} />
        ))}
      </Marquee>
    </>
  );
};

Home.Layout = Layout;

export default Home;
