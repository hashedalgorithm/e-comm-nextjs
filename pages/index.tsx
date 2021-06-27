import Image from "next/image";
import Navbar from "../components/Navbar";
import styles from "../Styles/home.module.css";
import Footer from "../components/Footer";
// import {LandingPic} from '../Images/LandingPic.jpg'
const myLandingLoader = () => {
    return `https://cdn.shopify.com/s/files/1/0567/6033/6539/files/IMG-2248_5aa8346e-480f-454b-9cc7-25c2905c6815_300x300.jpg?v=1621334807`;
};
const myAboutLoader = () => {
  return `https://cdn.shopify.com/s/files/1/0567/6033/6539/files/0be91e_1ae215e582014f2c9e622db249fd6deb_mv2_180x.jpg?v=1621334479%20180w,%20`;
}
const IndexPage = () => {
  return (
    <>
      <div className={styles.hometop_banner}>
        <h1>
          CASH ON DELIVERY AVAILABLE! Free shipping on orders above Rs.2000!
        </h1>
      </div>
      <Navbar />
      <div className={styles.LandingSection}>
        <Image
          className={styles.Landingimg}
          loader={myLandingLoader}
          src="https://cdn.shopify.com/s/files/1/0567/6033/6539/files/IMG-2248_5aa8346e-480f-454b-9cc7-25c2905c6815_300x300.jpg?v=1621334807"
          width={50}
          layout="responsive"
          height={70}
          alt="landing pic"
        />
        <div className={styles.LandingInnerSection}>
          <p className={styles.Landingimgtext}>Discover the Shi' Throne</p>
          <button className={styles.Landingbtn}>SHOP NOW</button>
        </div>
      </div>
      <div className={styles.section3}>
        <div className={styles.s3s1}>
          <Image
            loader={myAboutLoader}
            src="https://cdn.shopify.com/s/files/1/0567/6033/6539/files/0be91e_1ae215e582014f2c9e622db249fd6deb_mv2_180x.jpg?v=1621334479%20180w,%20"
            width={500}
            height={500}
            alt="aboutpic"
            layout="fixed"
          />
        </div>
        <div className={styles.s3s2}>
          <h1>ABOUT US</h1>
          <h5>Your Trusted Jewelry Store In India</h5>
          <h5>
            <strong>
              Shi' Throne as a brand has been designed to make her rule.
            </strong>
          </h5>
          <p>
            From our stunning pieces, to our gorgeous collections or our
            affordable prices, but what really sets us apart is our customer
            service. We know jewelry shopping can be intimidating, which is why
            we hark to provide a friendly, no-pressure approach that makes the
            purchasing process a pleasure.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default IndexPage;
