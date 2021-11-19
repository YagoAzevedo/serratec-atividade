import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { StyledTableCell, StyledTableRow } from "./styles";
import { useEffect, useState } from "react";
import axios from 'axios';
import { API_URL } from "../../constants";

const AlunosListagem = () => {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setAlunos(response.data);
      });
  }, []);

  return (
    <Box sx={{ marginTop: "25px" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Nome</StyledTableCell>
              <StyledTableCell>Idade</StyledTableCell>
              <StyledTableCell>Cidade</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {alunos.map((aluno) => (
              <StyledTableRow>
                <StyledTableCell>{aluno.nome}</StyledTableCell>
                <StyledTableCell>{aluno.idade}</StyledTableCell>
                <StyledTableCell>{aluno.cidade}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AlunosListagem;
