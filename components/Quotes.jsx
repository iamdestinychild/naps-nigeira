import styles from "../styles/quotescontainer.module.css";
import QuoteCard from "./QuoteCard";
import data from "../data.json";

const Quotes = () => {
  const quotes = data.quotes;
  return (
    <div className={styles.quotes}>
      <div className={styles.container}>
      {quotes.map(({ id, image, name, quote }) => (
        <QuoteCard key={id} image={image} name={name} quote={quote} />
      ))}
      </div>
    </div>
  );
};

export default Quotes;
