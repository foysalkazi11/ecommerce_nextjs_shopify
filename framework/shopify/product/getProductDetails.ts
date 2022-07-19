import { ApiConfig, Variables } from "@common/types/api";
import { ProductType } from "@common/types/product";
import { Product as shopifyProduct } from "@framework/schema";
import { getProductByHandle, normalizeProduct } from "@framework/utils";

interface FetchType {
  productByHandle: shopifyProduct;
}
interface ReturnType {
  product: ProductType | null;
}

const getProductDetails = async (options: {
  config: ApiConfig;
  variables: Variables;
}): Promise<ReturnType> => {
  const { config, variables } = options;
  const { data } = await config.fetch<FetchType>({
    url: config.apiUrl,
    query: getProductByHandle,
    variables,
  });

  const { productByHandle } = data;
  return {
    product: productByHandle ? normalizeProduct(productByHandle) : null,
  };
};

export default getProductDetails;
