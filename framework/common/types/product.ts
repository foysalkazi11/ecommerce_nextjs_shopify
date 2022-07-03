export interface ProductImage {
  url: string;
  alt?: string;
}

export interface productPrice {
  value: number;
  currencyCode: "USD" | "EUR" | string;
}

export interface ProductType {
  id: string;
  name: string;
  vendor: string;
  description: string;
  path: string;
  slug: string;
  images: ProductImage[];
  price: productPrice;
}
