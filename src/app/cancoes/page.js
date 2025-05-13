import Menu from "../../components/Menu";
import styles from "../page.module.css";

export default function Cancoes() {
  return (
    <>
      <Menu />
      <main className={styles.container}>
        <h1 className={styles.titulo}>Canções de TFM</h1>

        <div className={styles.card}>
          <h2>Olha a Onça Dele No Chapéu</h2>
          <p>
            Olha a onça dele no chapéu<br />
            Olha que essa onça é o seu troféu<br />
            Olha que essa onça não é fácil de se ter<br />
            Tem que ralar<br />
            Tem que sofrer<br /><br />

            Eu quero essa onça, essa onça como eu quero<br />
            Eu quero essa onça no meu gorro em amarelo<br />
            Onça-pintada, quem foi que te pintou?<br />
            Foi um guerreiro louco, louco como eu sou<br /><br />

            Onça-pintada na Terra ou no Céu<br />
            Presa em meu peito serás meu troféu<br />
          </p>
        </div>

        <div className={styles.card}>
          <h2>Eu Sou a Morte</h2>
          <p>
            Eu sou, eu sou<br />
            A morte! A morte!<br />
            Que ressurgiu do mar<br />
            Eu vejo o inimigo<br />
            E ele nem vai me notar<br /><br />

            Eu miro na cabeça<br />
            Atiro sem errar<br />
            Se munição eu não tiver<br />
            Pancadaria vai rolar<br /><br />

            Bate na cara, espanca até matar<br />
            Arranca a cabeça e joga ela no mar<br />
            E o interrogatório é muito fácil de fazer<br />
            Eu pego o inimigo e dou porrada até morrer<br />
          </p>
        </div>

        <div className={styles.card}>
          <h2>Olhar de Psico, Ladrão Logo Treme</h2>
          <p>
            Guiado por Deus, ninguém me segura<br />
            Guiado por Deus, ninguém me segura<br />
            Fuzil na mão e a pistola na cintura<br />
            Fuzil na mão e a pistola na cintura<br /><br />

            Se subo favela é pra ganhar<br />
            Se subo favela é pra ganhar<br />
            De clava na cara pro bicho gelar<br />
            De clava na cara pro bicho gelar<br /><br />

            Olhar de psico, ladrão logo treme<br />
            Olhar de psico, ladrão logo treme<br />
            Quem desce é a ceto, a barril da OM<br />
            Quem desce é a ceto, a barril da OM<br /><br />

            A ceto é barril, a ceto é barril<br />
            A ceto é barril, a ceto é barril<br />
            Cajado que passa e causa arrepio!<br />
            Cajado que passa e causa arrepio!<br /><br />
          </p>
        </div>
      </main>
    </>
  );
}
