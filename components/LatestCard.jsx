import Image from "next/image";
import styles from "../styles/latestcard.module.css";
import RightAngle from "@/icons/RightAngle";
import CustomImage from "./CustomImage";

function LatestCard({ title, image, text, date }) {
  return (
    <div className={styles.card}>
      <CustomImage
        img={image}
        alt={title}
        customClass={styles.cardImage}
      />
      <div className={styles.cardContent}>
        <h1 className={styles.cardTitle}>{title}</h1>
        <p className={styles.cardDate}>{date}</p>
        <article className={styles.cardText}>{text}</article>
        <div className={styles.cardReadMore}>
          <a href="#">Read More</a>
          <RightAngle iconClass={styles.rightAngle} />
        </div>
      </div>
    </div>
  );
}

export default LatestCard;
