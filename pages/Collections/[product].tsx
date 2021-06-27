import { GetStaticPaths, GetStaticProps } from "next";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ProductCard from "../../components/ProductCard";
import { ProductPageProps } from "../../interfaces";
import styles from "../../Styles/product.module.css";
import { categories } from "../../utils/sample-data";


const ProductPage = ({ title,productData }: ProductPageProps) => {
  console.log(title);
  console.log(productData)
  return (
    <>
      <Navbar />
      <div className={styles.productList}>
        <h1 style={{textAlign: "center"}}>{title}</h1>
        <div className={styles.productListbar}>
          <div className={styles.productListSections1}>
            <p style={{marginRight: "1rem"}}>SORT BY  </p>
            <select className={styles.productList_dropdown}>
              <option>Featured</option>
              <option>Best Selling</option>
              <option>A-Z</option>
              <option>Z-A</option>
              <option>Price low to high</option>
              <option>Price high to low</option>
              <option>Date old to new</option>
              <option>Date new to old</option>
            </select>
          </div>
          <div className={styles.productListSection2}>
            <p>{productData.length} products</p>
          </div>
        </div>
        <div className={styles.productListsection}>
          {productData.map((item)=>{
            return(
              <ProductCard img={item.image} productName={item.title} price={item.price} />
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = categories;
  const slugs = data.map((item) => item.path);
  const paths = slugs.map((slug) => ({ params: { product: slug } }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<
  ProductPageProps,
  { product: string }
> = async ({ params }) => {
  const data = categories;
  const pageName = data.find((category) => params?.product === category.path);
  console.log(pageName, params?.product);

  const resp = await fetch("https://fakestoreapi.com/products");
  const prdData = await resp.json();
  return {
    props: {
      title: pageName !== undefined ? pageName.name : null,
      productData: prdData,
    },
  };
};
export default ProductPage;
