import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, useRoutes } from "react-router-dom";
import Navbar from './components/Navbar';
import Container from '@mui/material/Container';
import Home from "./pages/home";
import CadastrarAlunos from "./pages/alunos/CadastrarAlunos";
import ListarAlunos from "./pages/alunos/AlunosListagem";
import CadastrarMateria from "./pages/materias/CadastrarMateria";
import MateriasListagem from "./pages/materias/ListagemMaterias";

const Routes = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/cadastrar-alunos", element: <CadastrarAlunos /> },
    { path: "/consultar-alunos", element: <ListarAlunos /> },
    { path: "/cadastrar-materias", element: <CadastrarMateria /> },
    { path: "/consultar-materias", element: <MateriasListagem /> }
  ]);

  return routes;
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Container maxWidth="md">
        <Routes />
      </Container>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
