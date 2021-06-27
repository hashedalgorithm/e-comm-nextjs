import Link from "next/link";
import { Fragment } from "react";
import styles from "../Styles/CategoryCard.module.css";
type CategoryCardProps = {
  key: number;
  name: string;
  path: string;
  img: string;
};
const CategoryCard = ({ key, name, path, img }: CategoryCardProps) => {
  return (
    <Fragment>
      <div key={key} className={styles.CategoryCard}>
        <Link href={`/Collections/${path}`}>
          <div className={styles.CC_content}>
            <img
              src={img}
              width="300px"
              height="320px"
              className={styles.CC_img}
              alt="card picture"
            />
            <h1 className={styles.CC_text}>{name}</h1>
          </div>
        </Link>
      </div>
    </Fragment>
  );
};

export default CategoryCard;
