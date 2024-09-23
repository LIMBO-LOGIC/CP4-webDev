import styles from "./NotFound.module.css"; // Importando o CSS Module

function NotFound() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Oops! Página Não Encontrada</h1>
      <p className={styles.message}>
        Parece que a página que você está procurando não existe ou foi removida.
        Volte para a <a href="/">página inicial</a>.
      </p>
    </section>
  );
}

export default NotFound;
