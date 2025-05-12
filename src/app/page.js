import Head from "next/head";
import Card from "../components/Card";
import Menu from "../components/Menu";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Combatente Digital</title>
        <meta name="description" content="Site do Combatente Digital com conteúdo militar" />
      </Head>

      <Menu /> {/* Menu de navegação aqui! */}

      <main className={styles.container}>
        <h1 className={styles.titulo}>Bem-vindo ao Combatente Digital</h1>
        <section className={styles.cardSection}>
          <Card title="Combatente Digital" description="Conteúdo do card aqui" />
        </section>
      </main>
    </>
  );
}
