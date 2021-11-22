import axios from "axios";
import { useState } from "react";
import { ButtonCadastro, Form, InputCadastro } from "../../components/Cadastros";
import { MATERIAS } from "../../components/LinkApiMaterias";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const CadastrarMaterias = () => {
  const MySwal = withReactContent(Swal);

  const [titulo, setTitulo] = useState();
  const [professor_nome, setProfessor] = useState();
 
  const cadastraMaterias = () => {
    axios
      .post(MATERIAS, {
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
        Cadastrar
      </ButtonCadastro>
    </Form>
  );
};

export default CadastrarMaterias;
