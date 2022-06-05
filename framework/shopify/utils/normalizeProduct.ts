import { ProductType } from "@common/types/product";
import { ImageEdge, Product as shopifyProduct } from "../schema";

const normalizeImages = ({ edges }: { edges: Array<ImageEdge> }) => {
  return edges?.map(({ node: { originalSrc: url, ...rest } }) => {
    return {
      url: `/images/${url}`,
      ...rest,
    };
  });
};

export const normalizeProduct = (productNode: shopifyProduct): ProductType => {
  const {
    id,
    handle,
    description,
    title: name,
    vendor,
    images,
    ...rest
  } = productNode;

  const product = {
    id,
    name,
    vendor,
    description,
    path: `/${handle}`,
    slug: handle?.replace(/^\/+|\/+$/g, ""),
    images: normalizeImages(images),
    ...rest,
  };

  return product;
};
