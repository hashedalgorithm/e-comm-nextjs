import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styles from '../Styles/contact.module.css'
const Contact = ()=> {
    return (
      <>
      <Navbar />
        <div className={styles.contact}>
          <h1>Contact</h1>
          <p>t2 1101 vipul belmonte golf course road sector 53 gurgaon</p>
          <p>shi.thronethelabel@gmail.com</p>
          <p>8527197151 (WhatsApp Only)</p>
        </div>
        <Footer />
      </>
    );
}

export default Contact