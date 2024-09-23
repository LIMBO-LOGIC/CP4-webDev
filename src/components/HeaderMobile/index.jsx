import { useState } from "react";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import logo from "../../assets/logo.png";
import { SlMenu } from "react-icons/sl";
import { Link } from "react-router-dom";
import stylesContainer from "./ContainerHeader.module.css"; // Importando o CSS Module
import stylesHeader from "./HeaderMobile.module.css"; // Importando o CSS Module

export default function HeaderMobile() {
  const [toggled, setToggled] = useState(false);

  return (
    <div className={stylesContainer.containerHeader}>
      <Sidebar
        onBackdropClick={() => setToggled(false)}
        toggled={toggled}
        breakPoint="all"
      >
        <Menu>
          <MenuItem>
            <img
              className={stylesContainer.imgMenu}
              src={logo}
              alt="Logo da empresa"
            />
          </MenuItem>
          <div
            className={stylesContainer.navegation}
            onClick={() => setToggled(!toggled)}
          >
            <MenuItem className={stylesContainer.itemMenu}>
              <Link to="/">Home</Link>
            </MenuItem>
            <MenuItem className={stylesContainer.itemMenu}>
              <Link to="/sobre">Sobre</Link>
            </MenuItem>
            <MenuItem className={stylesContainer.itemMenu}>
              <Link to="/produtos">Produtos</Link>
            </MenuItem>
            <MenuItem className={stylesContainer.itemMenu}>
              <Link to="/login">Login</Link>
            </MenuItem>
          </div>
        </Menu>
      </Sidebar>

      <header className={stylesHeader.headerMobile}>
        <img src={logo} alt="Logo da empresa" />
        <SlMenu
          className={stylesHeader.iconMenu}
          onClick={() => setToggled(!toggled)}
        />
      </header>
    </div>
  );
}
