import { ApiConfig } from "@common/types/api";
import { ProductType } from "@common/types/product";
import { ProductConnection } from "@framework/schema";
import getAllProductsPathsQuery from "@framework/utils/queries/get-all-products-paths";

type ReturnType = {
  products: Pick<ProductType, "slug">[];
};

const getAllProductsPaths = async (config: ApiConfig): Promise<ReturnType> => {
  const { data } = await config.fetch<{ products: ProductConnection }>({
    url: config.apiUrl,
    query: getAllProductsPathsQuery,
  });

  const products = data?.products?.edges?.map(({ node: { handle } }) => {
    return {
      slug: handle,
    };
  });

  return {
    products,
  };
};

export default getAllProductsPaths;
