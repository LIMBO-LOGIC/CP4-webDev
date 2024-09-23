import React from "react";
import styles from "./CardProduct.module.css"; // Se você tiver um CSS Module

const CardProduct = ({ produto }) => {
  return (
    <div className={styles.card}>
      <img src={produto.imagem} alt={produto.nome} />
      <h2>{produto.nome}</h2>
      <p>Preço Original: R$ {produto.precoOriginal}</p>
      <p className={styles.desconto}>Preço com Desconto: R$ {produto.precoDesconto}</p>
    </div>
  );
};

export default CardProduct;
