import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Home.module.css";
import image1 from "../../assets/banner1.png";
import image2 from "../../assets/banner2.png";
import image3 from "../../assets/banner3.png";
import CardProduct from "../../components/CardProduct";
import Slide from "../../components/Slide";

export default function Home() {
  const images = [image1, image2, image3];
  const [produtos, setProdutos] = useState([]); // Mudar para um array

  useEffect(() => {
    axios
      .get("http://localhost:5000/produtos")
      .then((response) => {
        setProdutos(response.data); // Assume que a resposta é um array
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className={styles.home}>
      <Slide images={images} />

      <h2 className={styles.categoryTitle}>CARROS</h2>
      <div className={styles.productsContainer}>
        {produtos.map((produto, index) => (
          <CardProduct key={produto.id} produto={produto} /> // Usar o id como chave
        ))}
      </div>
    </section>
  );
}
