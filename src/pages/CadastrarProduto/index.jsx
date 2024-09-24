import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CadastrarProduto.module.css"; // Importando o CSS

const CadastrarProduto = () => {
  const [nome, setNome] = useState("");
  const [precoOriginal, setPrecoOriginal] = useState("");
  const [precoDesconto, setPrecoDesconto] = useState("");
  const [imagem, setImagem] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verifica se todos os campos estão preenchidos
    if (!nome || !precoOriginal || !precoDesconto || !imagem) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const novoProduto = {
      id: Date.now().toString(), // Gerando um ID único
      nome,
      precoOriginal: parseFloat(precoOriginal),
      precoDesconto: parseFloat(precoDesconto),
      imagem,
    };

    try {
      // Envia o novo produto para o servidor
      const response = await fetch("http://localhost:5000/produtos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novoProduto),
      });

      // Verifica se a resposta foi bem-sucedida
      if (!response.ok) {
        throw new Error("Erro ao cadastrar produto");
      }

      alert("Produto cadastrado com sucesso!");
      navigate("/"); // Redireciona para a página inicial após o cadastro
    } catch (error) {
      console.error("Erro ao cadastrar produto:", error);
      alert("Ocorreu um erro ao cadastrar o produto. Tente novamente.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("usuario");
    localStorage.removeItem("senha");
    navigate("/login"); // Redireciona para a página de login
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Cadastrar Produto</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          className={styles.input}
          placeholder="Nome do Produto"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <input
          type="number"
          className={styles.input}
          placeholder="Preço Original"
          value={precoOriginal}
          onChange={(e) => setPrecoOriginal(e.target.value)}
          required
        />
        <input
          type="number"
          className={styles.input}
          placeholder="Preço com Desconto"
          value={precoDesconto}
          onChange={(e) => setPrecoDesconto(e.target.value)}
          required
        />
        <input
          type="text"
          className={styles.input}
          placeholder="URL da Imagem"
          value={imagem}
          onChange={(e) => setImagem(e.target.value)}
          required
        />
        <button type="submit" className={styles.button}>
          Cadastrar
        </button>
        <button onClick={handleLogout} className={styles.button}>
          Logout
        </button>
      </form>
    </section>
  );
};

export default CadastrarProduto;
