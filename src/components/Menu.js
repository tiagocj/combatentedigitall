import Link from "next/link";
import styles from "./Menu.module.css";

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <ul>
        <li><Link href="/">Início</Link></li>
        <li><Link href="/oracoes">Orações</Link></li>
        <li><Link href="/cancoes">Canções</Link></li>
        <li><Link href="/hinos">Hinos</Link></li>
      </ul>
    </nav>
  );
}
