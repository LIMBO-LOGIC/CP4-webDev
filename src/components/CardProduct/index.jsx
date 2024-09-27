// components/CardProduct.js
import React from "react";
import styles from "./CardProduct.module.css"; // Supondo que você tenha um CSS Module para o CardProduct

const CardProduct = ({ produto, onOpenModal }) => {
  return (
    <div className={styles.card}>
      <img src={produto.imagem} alt={produto.nome} />
      <h3>{produto.nome}</h3>
      <p>R$ {produto.precoDesconto.toLocaleString("pt-BR")}</p>
      <button className={styles.comprar} onClick={() => onOpenModal(produto)}>
        Comprar
      </button>
    </div>
  );
};

export default CardProduct;
