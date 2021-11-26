import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { ButtonCadastro, Form, InputCadastro } from "../../components/Cadastros";
import { ALUNOS } from "../../components/LinkAPIAlunos"
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useParams } from "react-router";
import AlunoContext from "../../context/aluno";

const CadastrarAlunos = () => {

  const { id } = useParams();
  const MySwal = withReactContent(Swal);
  const { setAlunos, alunos } = useContext(AlunoContext);
  const valorInicial = id ? "" : null;
  const [nome, setNome] = useState(valorInicial);
  const [idade, setIdade] = useState(valorInicial);
  const [cidade, setCidade] = useState(valorInicial);

  useEffect(() => {
    getAlunos()
  }, []);

  const getAlunos = () => {
    alunos.forEach((aluno) => {
      if (aluno.id == id) {
        setNome(aluno.nome);
        setIdade(aluno.idade);
        setCidade(aluno.cidade);
      }
    })
  }

  const cadastrarAlunos = () => {
    if (id){
      axios.put(ALUNOS, {
        id,
        nome,
        idade,
        cidade,
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
      axios.post(ALUNOS, {
        nome,
        idade,
        cidade,
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
    }    
  };

  const limparCampos = () => {
    setNome("");
    setIdade("");
    setCidade("");
  };

  return (
    <Form>
      <InputCadastro
        label="Nome"
        variant="outlined"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <InputCadastro
        label="Idade"
        variant="outlined"
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
      />
      <InputCadastro
        label="Cidade"
        variant="outlined"
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
      />

      <ButtonCadastro variant="contained" onClick={cadastrarAlunos}>
       {id ? 'Editar' : 'Cadastrar'}
      </ButtonCadastro>
    </Form>
  );
};

export default CadastrarAlunos;
