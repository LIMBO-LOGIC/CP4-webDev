// components/Modal.js
import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ isOpen, onClose, produto }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose}>
          X
        </button>
        {produto && (
          <div className={styles.content}>
            <img
              className={styles.productImage}
              src={produto.imagem}
              alt={produto.nome}
            />
            <div className={styles.textContainer}>
              <h2>{produto.nome}</h2>
              <p>Preço: R$ {produto.precoDesconto.toLocaleString("pt-BR")}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
