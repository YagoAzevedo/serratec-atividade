import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import {ThemeWrapper, MaterialUISwitch} from './styles';
import TemaContext from "../../context/tema";
import { useContext } from "react";

export default function Navbar (props) {
  
  const {temaSelecionado, setTemaSelecionado} = useContext(TemaContext);

  const alterarTema = e =>{
    const novoTema = e.target.checked ? "escuro" : "claro";
    setTemaSelecionado(novoTema);
  };
  
    return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              Home
            </IconButton>
          </Link>
          <Link to="/consultar-alunos">
            <Button color="inherit">Consultar Alunos</Button>
          </Link>
          <Link to="/cadastrar-alunos">
            <Button color="inherit">Cadastro de Aluno</Button>
          </Link>
          <Link to="/consultar-materias">
            <Button color="inherit">Consultar Materias</Button>
          </Link>
          <Link to="/cadastrar-materias">
            <Button color="inherit">Cadastro de Materias</Button>
          </Link>
        <ThemeWrapper >        
        <span style={{alignSelf: "center"}}>Tema</span>
        <MaterialUISwitch  onClick={(e) =>{alterarTema(e)}} sx={{ m: 1 }} />
        </ThemeWrapper>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
