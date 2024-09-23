import styles from "./About.module.css"; // Importando o CSS Module
import imageAbout from "./imageFitness.png";

function About() {
  return (
    <section className={styles.about}>
      <img src={imageAbout} alt="Imagem referenciando o texto" />
      <div className={styles.boxText}>
        <h1>LLCV CAR SHOP</h1>
        <p>
          A LLCV CAR SHOP é uma concessionária fictícia que nasceu com a missão
          de proporcionar o melhor em veículos para todos os perfis de
          motoristas, desde iniciantes até os mais experientes. Fundada por um
          grupo de apaixonados por automobilismo, a loja rapidamente se tornou
          referência no mercado pela sua ampla variedade de automóveis,
          qualidade excepcional e atendimento personalizado. Cada detalhe é
          pensado para garantir que nossos clientes encontrem exatamente o que
          precisam, seja para carros de passeio, SUVs, caminhonetes ou veículos
          de luxo.
        </p>
      </div>
    </section>
  );
}

export default About;
