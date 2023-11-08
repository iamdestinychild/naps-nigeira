import Image from "next/image";
import styles from "../styles/quotescard.module.css";

const QuoteCard = ({ image, name, quote }) => {
  return (
    <div className={styles.quotecard}>
      <div className={styles.quoteImageContainer}>
      <Image src={image} alt={name} className={styles.quoteImage} fill/>
    </div>
      <div className={styles.quoteTextName}>
        <p className={styles.quotetext}>{quote}</p>
        <p className={styles.quoteName}>{name}</p>
      </div>
    </div>
  );
};

export default QuoteCard;
