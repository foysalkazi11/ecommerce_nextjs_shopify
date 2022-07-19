import { Layout } from "@components/common";
import { ProductType } from "@common/types/product";
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import React from "react";
import { getConfig } from "@framework/api/config";
import { getProductDetails, getAllProductsPaths } from "@framework/product";

type ReturnType = {
  products: Pick<ProductType, "slug">[];
};

// fetch all of the products slugs
export const getStaticPaths: GetStaticPaths = async () => {
  const config = getConfig();

  const { products } = await getAllProductsPaths(config);
  return {
    paths: products?.map((product) => ({ params: { slug: product.slug } })),
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<{ slug: string }>) => {
  const config = getConfig();
  const { product } = await getProductDetails({
    config,
    variables: { slug: params?.slug },
  });
  return {
    props: {
      product,
    },
  };
};

export default function ProductDetails({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <div>{product?.name}</div>;
}
ProductDetails.Layout = Layout;
