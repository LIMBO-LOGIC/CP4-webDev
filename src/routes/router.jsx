import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/RootLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Product from "../pages/Product";
import CadastrarProduto from "../pages/CadastrarProduto";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "sobre", element: <About /> },
      { path: "produtos", element: <Product /> },
      { path: "login", element: <Login /> },
      { path: "cadastrarProdutos", element: <CadastrarProduto /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
