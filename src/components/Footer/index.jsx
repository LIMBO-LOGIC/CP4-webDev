import { Link } from "react-router-dom";
import styles from "./Footer.module.css"; // Importando o CSS Module
import logo from "../../assets/logo.png";
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.navFooter}>
        <nav>
          <Link to="/" className={styles.itemFooter}>
            Home
          </Link>
          <Link to="/sobre" className={styles.itemFooter}>
            Sobre
          </Link>
          <Link to="/produtos" className={styles.itemFooter}>
            Produtos
          </Link>
          <Link to="/login" className={styles.itemFooter}>
            Contato
          </Link>
        </nav>
        <div className={styles.socialMedia}>
          <a href="">
            <FaFacebookSquare />
          </a>
          <a href="">
            <FaInstagram />
          </a>
          <a href="">
            <FaYoutube />
          </a>
        </div>
      </div>
      <hr />
      <div className={styles.copyright}>
        <p>&copy; 2024 LLCV. Todos os direitos reservados.</p>
        <img src={logo} alt="Logo empresa" />
        <div className={styles.links}>
          <a href="">Termos de serviço</a>
          <a href="">Política de privacidade </a>
        </div>
      </div>
    </footer>
  );
}
