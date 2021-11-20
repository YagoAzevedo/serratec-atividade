import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
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
        </Toolbar>
      </AppBar>
    </Box>
  );
}
