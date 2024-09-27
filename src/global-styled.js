import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
    }

    :root {
        --bg-color: #1A1A1A; /* Fundo escuro */
        --green-light-color: #B9A25B; /* Verde claro em tom dourado */
        --yellow-color: #2381E6; /* Dourado */
        --red-color: #FF3B3B; /* Vermelho mais suave */
        --blue-color: #6A8EFD; /* Azul mais suave */
        --green-light-color: #3B3B3B; /* Verde escuro, mais neutro */
        --text-green-color: #0068D7; /* Texto em dourado claro */
        --text-gray-color: #D1D1D1; /* Cinza claro para melhor contraste */
        --bg-body-color: #121212; /* Corpo de fundo escuro */
        --black-default: #000; /* Preto padrão */
        --white-default: #EAEAEA; /* Branco suave para melhor leitura */
    }
    

    html {
        scroll-behavior: smooth;
    }

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: var(--text-green-color);
        border-radius: 4px;
    }

    ::-webkit-scrollbar-track {
        background-color: var(--bg-color);
    }

    body,
    #root{
        width: 100vw;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        overflow-x: hidden;

    }

    ul, 
    li,
    ol,
    a {
        list-style: none;
        color: inherit;
        text-decoration: none;
    }


    section{
        flex-grow: 1;
        overflow-x: hidden;
    }

     main{
        display: flex;
        flex-direction: column;
        width: 100vw;
        flex-grow: 1;
    }
    /* Resetando CSS padrão da sidebar*/
.css-1wvake5 {
  border: none !important;
  border-color: none !important;
}
.css-honxw6,
.css-jn69v9 {
  height: 8px !important;
  width: 8px !important;
}

.css-dip3t8 {
  background: none !important;
}

.ps-menu-button {
  height: auto !important;
}

.ps-menu-button:hover {
  background: none !important;
}
.css-dip3t8 {
  background-color: var(--bg-body-color) !important;
}

.pt-sub {
  padding-left: 32px;
}
`;

export default GlobalStyle;
