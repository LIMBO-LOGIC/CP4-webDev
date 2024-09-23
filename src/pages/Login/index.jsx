import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import imageAbout from "./fundopreto.png";

const Login = () => {
  const usuario = useRef();
  const senha = useRef();
  const [usuarios, setUsuarios] = useState([]);
  const navigate = useNavigate();

  function validar() {
    return usuarios.some(
      (u) =>
        u.usuario === usuario.current.value && u.senha === senha.current.value
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validar()) {
      const token =
        Math.random().toString(16).substring(2) +
        Math.random().toString(16).substring(2);
      sessionStorage.setItem("usuario", usuario.current.value);
      sessionStorage.setItem("senha", token);
      navigate("/cadastrarProdutos");
    } else {
      alert("Usuário/senha inválidos");
    }
  };

  useEffect(() => {
    fetch("http://localhost:5000/usuarios")
      .then((res) => res.json())
      .then((res) => setUsuarios(res));
  }, []);

  return (
    <div className={styles.mainLogin}F>
      <div className={styles.leftLogin}>
        <h3>Se cadastre <br/>Para poder adicionar produtos</h3>
        <img className={styles.imageLeft} src={imageAbout} alt="Animação" />
      </div>
      <div className={styles.rightLogin}>
        <div className={styles.cardUsuario}>
          <h2 className={styles.cardHeading}>Login</h2>
          <form className={styles.loginForm} onSubmit={handleSubmit}>
            <div className={styles.textfield}>
              <label className={styles.label} htmlFor="usuario">
                Usuário
              </label>
              <input
                type="text"
                className={styles.input}
                id="usuario"
                ref={usuario}
                placeholder="Usuário"
                required
              />
            </div>
            <div className={styles.textfield}>
              <label className={styles.label} htmlFor="senha">
                Senha
              </label>
              <input
                type="password"
                className={styles.input}
                id="senha"
                ref={senha}
                placeholder="Senha"
                required
              />
            </div>
            <button type="submit" className={styles.button}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
