import styles from '../../Styles/Collections.module.css'
import { Productobjecttype } from "../../interfaces";
import ProductCard from '../../components/ProductCard';
import { GetServerSideProps } from 'next';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

type CollectionProps = {
  data: Array<Productobjecttype>;
};

const all = ({ data }: CollectionProps) => {
  return (
    <div>
      <Navbar />
      <h1 className={styles.CollectionsHead}>All Products</h1>
      <div className={styles.Collections_List}>
        {data.map((item: Productobjecttype) => {
          return (
            <ProductCard
              img={item.image}
              productName={item.title}
              price={item.price}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async () => {
  const resp = await fetch("https://fakestoreapi.com/products");
  const data = await resp.json();

  if (!data) {
    notFound: true;
  }

  return {                      
    props: { data },
  };
};
export default all;
