import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header";
import useContexts from "../hooks/useContext";
import HeaderMobile from "../components/HeaderMobile";
import Footer from "../components/Footer";

export default function RootLayout() {
  const { isMobileBig } = useContexts();
  const navigate = useNavigate();

  useEffect(() => {
    // Verifica se há um login armazenado no sessionStorage
    const loggedIn = sessionStorage.getItem("login");

    // Se não houver, redireciona para a página desejada
    if (!loggedIn) {
      navigate("/"); // ou outra rota que você queira
    }
  }, [navigate]);

  return (
    <>
      {isMobileBig ? <HeaderMobile /> : <Header />}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
