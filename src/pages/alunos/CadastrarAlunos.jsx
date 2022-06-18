import axios from "axios";
import { useEffect, useState, useContext } from "react";
import Styles from "../../components/Styles";
import { API_URL } from "../../constants";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useParams } from "react-router";
import { AlunoContext } from "../../context";
// import Lottie from "react-lottie";
// import animationData from "../../lotties/9844-loading-40-paperplane.json";

const CadastrarAlunos = () => {
  const { id } = useParams();
  const MySwal = withReactContent(Swal);

  const valorInicial = id ? "" : null;
  const [nome, setNome] = useState(valorInicial);
  const [idade, setIdade] = useState(valorInicial);
  const [cidade, setCidade] = useState(valorInicial);
  const { alunos, setAlunos } = useContext(AlunoContext);

//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: animationData,
//     rendererSettings: {
//       preserveAspectRatio: "xMidYMid slice",
//     },
//   };

  useEffect(() => {
    getAlunos();
  }, []);

  const getAlunos = () => {
    if (alunos.length > 0) {
      const aluno = alunos.find((lista) => lista.id == id);
      setNome(aluno.nome);
      setIdade(aluno.idade);
      setCidade(aluno.cidade);
    } else {
      axios.get(API_URL).then((response) => {
        response.data.forEach((aluno) => {
          if (aluno.id == id) {
            setNome(aluno.nome);
            setIdade(aluno.idade);
            setCidade(aluno.cidade);
          }
        });
      });
    }
  };

  const cadastrarAlunos = () => {
    if (id) {
      axios
        .put(API_URL, {
          id,
          nome,
          idade,
          cidade,
        })
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            MySwal.fire(<p>{response?.data?.message}</p>);
            limparCampos();
          }
        })
        .catch((error) => {
          MySwal.fire({
            icon: "error",
            title: "Oops...",
            text: error,
          });
        });
    } else {
      axios
        .post(API_URL, {
          nome,
          idade,
          cidade,
        })
        .then((response) => {
          if (response.status === 201) {
            MySwal.fire(<p>{response?.data?.message}</p>);
            limparCampos();
          }
        })
        .catch((error) => {
          MySwal.fire({
            icon: "error",
            title: "Oops...",
            text: error,
          });
        });
    }
  };

  const limparCampos = () => {
    setNome("");
    setIdade("");
    setCidade("");
  };

  return (
    <Styles.Form>
      <Styles.InputCadastro
        label="Nome"
        variant="outlined"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <Styles.InputCadastro
        label="Idade"
        variant="outlined"
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
      />
      <Styles.InputCadastro
        label="Cidade"
        variant="outlined"
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
      />

      <Styles.ButtonCadastro onClick={cadastrarAlunos}>
        {id ? "Editar" : "Cadastrar"}
      </Styles.ButtonCadastro>
      {/* <>
        <Lottie options={defaultOptions} height={500} width={500} />
      </> */}
    </Styles.Form>
  );
};

export default CadastrarAlunos;
