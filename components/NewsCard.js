import Link from "next/link";
import styles from "../styles/card.module.css";

function NewsCard({
  content: { title, link, description, pubDate, creator, keywords, source_id },
}) {
  const imageLoader = ({ src }) => src;
  return (
    <div className={styles.wrapper}>
      <h3>
        <Link href={link}>{title}</Link>
      </h3>
      <p>{pubDate}</p>
      <p>{description}</p>
      <div className={styles.footer}>
        <span>By: {creator}</span>
        <span className={styles.source}>{source_id}</span>
      </div>
    </div>
  );
}

export default NewsCard;
