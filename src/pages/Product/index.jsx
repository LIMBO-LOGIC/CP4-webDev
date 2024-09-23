import React, { useEffect, useState } from "react";
import styles from "./Product.module.css";
import { Link } from "react-router-dom";
export default function Product() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/produtos")
      .then((response) => response.json())
      .then((data) => setProdutos(data))
      .catch((error) => console.error("Erro ao buscar produtos:", error));
  }, []);

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Lista de Produtos</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Preço Original</th>
            <th>Preço com Desconto</th>
            <th>Imagem</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.nome}</td>
              <td>{product.precoOriginal}</td>
              <td>{product.precoDesconto}</td>
              <td>
                <img
                  src={product.imagem}
                  alt={product.nome}
                  className={styles.image}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className={styles.button}>
        <Link to="/login">Cadastrar Produtos</Link>
      </button>
    </section>
  );
}
