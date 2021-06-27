import Link from "next/link";
import styles from "../Styles/productCard.module.css";
type ProductCardProps = {
  img: string;
  productName: string;
  price: number;
  isSoldout?: boolean;
};
const ProductCard = ({
  img,
  productName,
  price,
  isSoldout,
}: ProductCardProps) => {
  return (
    <>
      <Link href={`/${productName}`}>
        <div className={styles.productCard}>
          <img
            src={`${
              img
                ? img
                : "//cdn.shopify.com/s/files/1/0567/6033/6539/products/0be91e_4cde9fef67684781a2964292062fd73b_mv2_360x.jpg?v=1621332414 360w 360h"
            }`}
            width="280px"
            height="300px"
            alt="productimg"
          />
          <p>{`${productName ? productName : "1995 Anket of Gold"}`}</p>
          <p>Rs.{`${price ? price : 299}`}</p>
          {isSoldout ? <p className={styles.soldout}> SOLD OUT</p> : <></>}
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
