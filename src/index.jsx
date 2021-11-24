import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import App from "./components/App";
import DefaultPage from "./components/DefaultPage";
import GlobalContext from "./context";

ReactDOM.render(
  <React.StrictMode>
    <GlobalContext>
      {/* 
      DefaultPage
      É só uma div, que pega o tema, pra incluir no fundo da página
    */}
      <DefaultPage>
        <BrowserRouter>
          {/* 
        Navbar => possui o botão de escolha do tema
      */}
          <Navbar />
          <App />
        </BrowserRouter>
      </DefaultPage>
    </GlobalContext>
  </React.StrictMode>,
  document.getElementById("root")
);
