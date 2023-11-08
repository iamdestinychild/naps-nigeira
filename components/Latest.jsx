import data from "../data.json";
import LatestCard from "./LatestCard";
import styles from "../styles/latest.module.css";

function Latest() {
  return (
    <div className={styles.latest}>
      <h1 className={styles.latestTitle}>Latest News</h1>
      <div className={styles.container}>
        {data.cards.map((d) => (
          <LatestCard
            key={d.id}
            title={d.title}
            image={d.image}
            text={d.text}
            date={d.datePosted}
          />
        ))}
      </div>
    </div>
  );
};

export default Latest;
