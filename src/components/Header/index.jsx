import { Link } from "react-router-dom";
import styles from "./Header.module.css"; // Importando o CSS Module
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo da empresa" />
      <nav>
        <ul>
          <li className={styles.itemMenu}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.itemMenu}>
            <Link to="/sobre">Sobre</Link>
          </li>
          <li className={styles.itemMenu}>
            <Link to="/produtos">Produtos</Link>
          </li>
          <li className={styles.itemMenu}>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
