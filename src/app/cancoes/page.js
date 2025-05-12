import Menu from "../../components/Menu";
import styles from "../page.module.css";

export default function Cancoes() {
  return (
    <>
      <Menu />
      <main className={styles.container}>
        <h1 className={styles.titulo}>Canções de TFM</h1>

        <section>
          <h2>Canção do Guerreiro</h2>
          <p>
            Sou guerreiro, sou guerreiro <br />
            No mato, no barro, no campo de guerra <br />
            Na alma, coragem, no peito, a honra <br />
            TFM me prepara pra luta que for
          </p>
        </section>

        <section style={{ marginTop: "2rem" }}>
          <h2>Audio motivacional</h2>
          <audio controls>
            <source src="/audios/guerreiro.mp3" type="audio/mpeg" />
            Seu navegador não suporta áudio.
          </audio>
        </section>
      </main>
    </>
  );
}
