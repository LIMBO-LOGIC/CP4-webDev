// Home.js
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Home.module.css";
import image1 from "../../assets/banner1.png";
import image2 from "../../assets/banner2.png";
import image3 from "../../assets/banner3.png";
import CardProduct from "../../components/CardProduct";
import Slide from "../../components/Slide";
import Modal from "../../components/Modal/Index";
export default function Home() {
  const images = [image1, image2, image3];
  const [produtos, setProdutos] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/produtos")
      .then((response) => {
        setProdutos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const openModal = (produto) => {
    setSelectedProduct(produto);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  return (
    <section className={styles.home}>
      <Slide images={images} />

      <h2 className={styles.categoryTitle}>CARROS</h2>
      <div className={styles.productsContainer}>
        {produtos.map((produto) => (
          <CardProduct
            key={produto.id}
            produto={produto}
            onOpenModal={openModal}
          />
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        produto={selectedProduct}
      />
    </section>
  );
}
