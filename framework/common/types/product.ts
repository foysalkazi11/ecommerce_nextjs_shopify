export interface ProductImage {
  url: string;
  alt?: string;
}

export interface ProductType {
  id: string;
  name: string;
  vendor: string;
  description: string;
  path: string;
  slug: string;
  images: ProductImage[];
}