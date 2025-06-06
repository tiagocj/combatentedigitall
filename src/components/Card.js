import styles from "./Card.module.css";
import Link from "next/link";

export default function Card() {
  return (
    <div className={styles.container}>
      <Link href="/cancoes" className={styles.card}>
        <h2>Canções TFM</h2>
      </Link>

      <Link href="/oracoes" className={styles.card}>
        <h2>Orações</h2>
      </Link>

      <Link href="/hinos" className={styles.card}>
        <h2>Hinos</h2>
      </Link>
    </div>
  );
}
