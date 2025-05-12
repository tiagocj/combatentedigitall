import styles from "../page.module.css";
import Menu from "../../components/Menu";

export default function Oracoes() {
  return (
    <>
      <Menu />
      <main className={styles.container}>
        <h1 className={styles.titulo}>Orações Militares</h1>
        <section>
          <h2>Oração do Combatente</h2>
          <p>
            Senhor, nós somos os soldados da Pátria. Somos soldados do Brasil.
            Fortalece-nos para que possamos cumprir nossa missão...
          </p>
        </section>
      </main>
    </>
  );
}
