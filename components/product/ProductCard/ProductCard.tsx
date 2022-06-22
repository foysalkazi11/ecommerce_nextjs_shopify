import { ProductType } from "@common/types/product";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import s from "./ProductCard.module.css";

interface ProductCardProps {
  product: ProductType;
}
const placeholder = "/assets/product-image-placeholder.svg";
const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <Link href={`/product/${product?.slug}`}>
      <a className={s.root}>
        <div className={s.productBg}></div>
        <div className={s.productTag}>
          <h3 className={s.productTitle}>
            <span>{product.name}</span>
          </h3>
          <span className={s.productPrice}>14 $ </span>
        </div>
        {product?.images && (
          <Image
            className={s.productImage}
            width={540}
            height={540}
            src={product?.images[0]?.url ?? placeholder}
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
