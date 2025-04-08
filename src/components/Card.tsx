import styles from "./Card.module.css";

type CardProps = {
  title: string;
  description: string;
};

export default function Card({ title, description }: CardProps) {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
