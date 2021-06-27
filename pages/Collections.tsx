import CategoryCard from "../components/CategoryCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../Styles/Collections.module.css";
import { categories } from "../utils/sample-data";

const Collections = () => {
  return (
    <div>
      <Navbar />
      <h1 className={styles.CollectionsHead}>Collections</h1>
      <div className={styles.Collections_List}>
        {categories.map((item) => {
          return (
            <CategoryCard
              key={item.id}
              name={item.name}
              path={item.path}
              img={item.img}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Collections;
