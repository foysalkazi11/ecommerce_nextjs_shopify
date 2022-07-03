import { productPrice, ProductType } from "@common/types/product";
import { ImageEdge, MoneyV2, Product as shopifyProduct } from "../schema";

const normalizeImages = ({ edges }: { edges: Array<ImageEdge> }) => {
  return edges?.map(({ node: { originalSrc: url, ...rest } }) => {
    return {
      url: `/images/${url}`,
      ...rest,
    };
  });
};

const normalizePrice = ({ amount, currencyCode }: MoneyV2): productPrice => {
  return {
    value: +amount,
    currencyCode,
  };
};

export const normalizeProduct = (productNode: shopifyProduct): ProductType => {
  const {
    id,
    handle,
    description,
    title: name,
    vendor,
    images,
    priceRange,
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
    price: normalizePrice(priceRange?.minVariantPrice),
    ...rest,
  };

  return product;
};
