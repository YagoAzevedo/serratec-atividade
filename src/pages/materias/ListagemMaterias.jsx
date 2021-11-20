import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { StyledTableCell, StyledTableRow } from "./styles";
import { useEffect, useState } from "react";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { MATERIAS } from "../../components/LinkApiMaterias";

const MateriasListagem = () => {
  const MySwal = withReactContent(Swal);

  const [materias, setMaterias] = useState([]);

  useEffect(() => {
    getMaterias();
  }, []);

  const getMaterias = () => {
    axios.get(MATERIAS).then((response) => {
        setMaterias(response.data);
    });
  };

  const deletarMateria = (materia) => {
    axios
      .delete(MATERIAS, { data: materia })
      .then((response) => {
        MySwal.fire(<p>{response?.data?.message}</p>);
        
        const materiasIndex = materias.findIndex(
          (elemento) => elemento.id === materia.id
        );
        let newMaterias = [ ...materias ];
        newMaterias.splice(materiasIndex, 1);
        setMaterias(newMaterias);
      })
      .catch((error) => {
        MySwal.fire({
          icon: "error",
          title: "Oops...",
          text: error,
        });
      });
  };

  return (
    <Box sx={{ marginTop: "25px" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Matéria</StyledTableCell>
              <StyledTableCell>Professor</StyledTableCell>
              <StyledTableCell>Ações</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {materias.map((materias) => (
              <StyledTableRow>
                <StyledTableCell>{materias.titulo}</StyledTableCell>
                <StyledTableCell>{materias.professor_nome}</StyledTableCell>
                
                <StyledTableCell>
                  <Button onClick={() => deletarMateria(materias)} variant="text">
                    <DeleteIcon />
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default MateriasListagem;
