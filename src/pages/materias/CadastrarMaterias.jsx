import axios from "axios";
import { useEffect, useState } from "react";
import Styles from "../../components/Styles";
import { API_URL_MATERIAS } from "../../constants";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useParams } from "react-router";

const CadastrarMaterias = () => {
	const { id } = useParams();
	const MySwal = withReactContent(Swal);

	const valorInicial = id ? "" : null;
	const [professor_nome, setProfessorNome] = useState(valorInicial);
	const [titulo, setTitulo] = useState(valorInicial);

	useEffect(() => {
		getMaterias();
	}, []);

	const getMaterias = () => {
		axios.get(API_URL_MATERIAS).then((response) => {
			response.data.forEach((materia) => {
				if (materia.id == id) {
					setProfessorNome(materia.professor_nome);
					setTitulo(materia.titulo);
				}
			});
		});
	};

	const cadastrarMaterias = () => {
		if (id) {
			axios
				.put(API_URL_MATERIAS, {
					id,
					titulo,
					professor_nome,
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
				.post(API_URL_MATERIAS, {
					titulo,
					professor_nome,
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
		setProfessorNome("");
		setTitulo("");
	};

	return (
		<Styles.Form>
			<Styles.InputCadastro
				label="Nome do Professor"
				variant="outlined"
				value={professor_nome}
				onChange={(e) => setProfessorNome(e.target.value)}
			/>
			<Styles.InputCadastro
				label="Título da Matéria"
				variant="outlined"
				value={titulo}
				onChange={(e) => setTitulo(e.target.value)}
			/>
			<Styles.ButtonCadastro onClick={cadastrarMaterias}>
				{id ? "Atualizar" : "Cadastrar"}
			</Styles.ButtonCadastro>
		</Styles.Form>
	);
};

export default CadastrarMaterias;
