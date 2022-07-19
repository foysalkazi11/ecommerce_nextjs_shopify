import { normalizeProduct, getAllProductsQuery } from "../utils";
import { ProductConnection } from "../schema";
import { ProductType } from "@common/types/product";
import { ApiConfig } from "@common/types/api";

interface ReturnType {
  products: ProductConnection;
}

const getAllProducts = async (config: ApiConfig): Promise<ProductType[]> => {
  const { data } = await config.fetch<ReturnType>({
    url: config.apiUrl,
    query: getAllProductsQuery,
  });
  const product =
    data?.products?.edges?.map(({ node: product }) =>
      normalizeProduct(product)
    ) ?? [];
  return product;
};

export default getAllProducts;
