import { ProductType } from "@common/types/product";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface ProductCardProps {
  product: ProductType;
}
const placeholder = "/assets/product-image-placeholder.svg";
const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <Link href={`/product/${product?.slug}`}>
      <a>
        <div>
          <h3>
            <span>{product.name}</span>
          </h3>
          <span>14 $ </span>
        </div>
        {product?.images && (
          <Image
            width={540}
            height={540}
            src={placeholder}
            alt={product?.name ?? "Product image"}
            quality="85"
            layout="responsive"
          />
        )}
      </a>
    </Link>
  );
};

export default ProductCard;
