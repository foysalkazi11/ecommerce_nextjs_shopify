import { fetchApi, normalizeProduct, getAllProductsQuery } from "../utils";
import { ProductConnection } from "../schema";
import { ProductType } from "@common/types/product";

interface ReturnType {
  products: ProductConnection;
}

const getAllProducts = async (): Promise<ProductType[]> => {
  const { data } = await fetchApi<ReturnType>({ query: getAllProductsQuery });
  const product =
    data?.products?.edges?.map(({ node: product }) =>
      normalizeProduct(product)
    ) ?? [];
  return product;
};

export default getAllProducts;
