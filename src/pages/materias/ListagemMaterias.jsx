import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { StyledTableCell, StyledTableRow } from "./styles";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { MATERIAS } from "../../components/LinkApiMaterias";
import { useNavigate } from "react-router";
import MateriaContext from "../../context/materia";
import animeationData from "../../components/lotties/load.json";
import Lottie from "react-lottie";
import EditIcon from "@mui/icons-material/Edit";


const MateriasListagem = () => {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  const { materias, setMaterias } = useContext(MateriaContext)

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animeationData: animeationData,
    rendererSettings: {
      preserveApectRatio: "xMidYMid slice",
    }
  }

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
        let newMaterias = [...materias];
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

  const editarMateria = (materia) => {
    navigate(`/editar-materias/${materia.id}`)
  };

  return (
    <Box sx={{ marginTop: "25px" }}>
      {materias.length > 0 ? (
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
              {materias.map((materia) => (
                <StyledTableRow>
                  <StyledTableCell>{materia.titulo}</StyledTableCell>
                  <StyledTableCell>{materia.professor_nome}</StyledTableCell>
                  <StyledTableCell>
                    <Button onClick={() => editarMateria(materia)} variant="text">
                      <EditIcon />
                    </Button>
                    <Button onClick={() => deletarMateria(materia)} variant="text">
                      <DeleteIcon />
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <>
          <Lottie options={defaultOptions} height={500} width={500} />
        </>
      )
      }
    </Box>
  );
};

export default MateriasListagem;
