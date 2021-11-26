<<<<<<< Updated upstream
import { useRoutes } from "react-router-dom";
import AlunosListagem from '../pages/alunos/AlunosListagem';
import CadastrarAlunos from "../pages/alunos/CadastrarAlunos";
import Container from '@mui/material/Container';
import { useContext } from "react";
import { TemaContext } from "../context";
import tema from "../tema";
import Login from "../pages/Login";

const Routes = () => {
  const routes = useRoutes([
    { path: "/", element: <AlunosListagem /> },
    { path: "/cadastrar-alunos", element: <CadastrarAlunos /> },
    { path: "/editar-alunos/:id", element: <CadastrarAlunos /> },
    { path: "/login", element: <Login /> }
  ]);

  return routes;
};

const App = () => {
  const { temaSelecionado, setTemaSelecionado } = useContext(TemaContext);
  // tema.claro ou tema["claro"] fazem a mesma coisa
  return (
    <Container maxWidth="md" sx={tema[temaSelecionado]}>
      <Routes />
    </Container>
  );
};

export default App;
=======
import CadastrarAlunos from "../pages/alunos/CadastrarAlunos";
import ListarAlunos from "../pages/alunos/AlunosListagem";
import CadastrarMateria from "../pages/materias/CadastrarMateria";
import MateriasListagem from "../pages/materias/ListagemMaterias";
import Container from '@mui/material/Container';
import Home from "../pages/home";
import { useRoutes } from "react-router-dom";
import { useContext, useState } from "react";
import TemaContext from "../context/tema";
import tema from "../tema";

const Routes = () => {
    const routes = useRoutes([
      { path: "/", element: <Home /> },
      { path: "/consultar-alunos", element: <ListarAlunos /> },
      { path: "/cadastrar-alunos", element: <CadastrarAlunos /> },
      { path: "/editar-alunos/:id", element: <CadastrarAlunos /> },
      { path: "/consultar-materias", element: <MateriasListagem /> },
      { path: "/cadastrar-materias", element: <CadastrarMateria /> },
      { path: "/editar-materias/:id", element: <CadastrarMateria /> },
      
    ]);
  
    return routes;
  }

    const App = () =>{
      const {temaSelecionado, setTemaSelecionado} = useContext(TemaContext);

    return(
        <Container maxWidth="md" sx={tema[temaSelecionado]}>
            <Routes />
        </Container>
);
}

export default App;
>>>>>>> Stashed changes
