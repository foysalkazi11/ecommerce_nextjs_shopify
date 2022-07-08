import { ProductType } from "@common/types/product";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import s from "./ProductCard.module.css";

interface ProductCardProps {
  product: ProductType;
  varient?: "simple" | "slim";
}
const placeholder = "/assets/product-image-placeholder.svg";
const ProductCard: FC<ProductCardProps> = ({ product, varient = "simple" }) => {
  return (
    <Link href={`/product/${product?.slug}`}>
      <a className={s.root}>
        {varient === "slim" ? (
          <>
            <div className="inset-0 flex justify-center items-center absolute z-20">
              <span className="bg-black text-white p-3 text-xl font-bold">
                {product.name}
              </span>
            </div>
            {product?.images && (
              <Image
                className={s.productImage}
                width={320}
                height={320}
                src={product?.images[0]?.url ?? placeholder}
                alt={product?.name ?? "Product image"}
                quality="85"
                layout="fixed"
              />
            )}
          </>
        ) : (
          <>
            <div className={s.productBg}></div>
            <div className={s.productTag}>
              <h3 className={s.productTitle}>
                <span>{product.name}</span>
              </h3>
              <span className={s.productPrice}>
                {product?.price?.value} {product?.price?.currencyCode}
              </span>
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
          </>
        )}
      </a>
    </Link>
  );
};

export default ProductCard;
