import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ButtonCadastro, Form, InputCadastro } from "../../components/Cadastros";
import { MATERIAS } from "../../components/LinkApiMaterias";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useParams } from "react-router";
import MateriaContext from "../../context/materia";

const CadastrarMaterias = () => {

  const { id } = useParams();
  const MySwal = withReactContent(Swal);
  const { setMaterias, materias } = useContext(MateriaContext);
  const valorIn = id ? "" : null;
  const [titulo, setTitulo] = useState(valorIn);
  const [professor_nome, setProfessor] = useState(valorIn);

  useEffect(() => {
    getMaterias()
  }, []);

  const getMaterias = () => {
    materias.forEach((materia) => {
      if (materia.id == id) {
        setTitulo(materia.titulo);
        setProfessor(materia.professor_nome);
      }
    })
  }

  const cadastraMaterias = () => {
    if (id) {
      axios.put(MATERIAS, {
          id,
          titulo,
          professor_nome,
        })
        .then((response) => {
          if (response.status === 200) {
            MySwal.fire(<p>{response?.data?.message}</p>);
            limparCampos();
          }
        }).catch(error => {
          MySwal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error,
          })
        });
    } else {
      axios.post(MATERIAS, {
          titulo,
          professor_nome,
        })
        .then((response) => {
          if (response.status === 201) {
            MySwal.fire(<p>{response?.data?.message}</p>);
            limparCampos();
          }
        }).catch(error => {
          MySwal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error,
          })
        });
    };
  }
    const limparCampos = () => {
      setTitulo("");
      setProfessor("");
    };

    return (
      <Form>
        <InputCadastro
          label="Matéria"
          variant="outlined"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <InputCadastro
          label="Professor"
          variant="outlined"
          value={professor_nome}
          onChange={(e) => setProfessor(e.target.value)}
        />
        <ButtonCadastro variant="contained" onClick={cadastraMaterias}>
          {id ? 'Editar' : 'Cadastrar'}
        </ButtonCadastro>
      </Form>
    );
  };

  export default CadastrarMaterias;