import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { StyledTableCell, StyledTableRow } from "./styles";

const AlunosListagem = () => {
  const alunos = [
    {
      nome: "Yago",
      idade: 28,
      cidade: "Cabo Frio",
    },
  ];

  return (
    <Box sx={{marginTop: '25px'}}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="right">Nome</StyledTableCell>
              <StyledTableCell align="right">Idade</StyledTableCell>
              <StyledTableCell align="right">Cidade</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {alunos.map((aluno) => (
              <StyledTableRow>
                <StyledTableCell align="right">{aluno.nome}</StyledTableCell>
                <StyledTableCell align="right">{aluno.idade}</StyledTableCell>
                <StyledTableCell align="right">{aluno.cidade}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AlunosListagem;
