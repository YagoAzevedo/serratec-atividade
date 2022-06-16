import { useRoutes } from "react-router-dom";
import AlunosListagem from "../pages/alunos/AlunosListagem";
import CadastrarAlunos from "../pages/alunos/CadastrarAlunos";
import CadastrarMaterias from "../pages/materias/CadastrarMaterias";
import MateriasListagem from "../pages/materias/MateriasListagem";
import Container from "@mui/material/Container";
import { useContext } from "react";
import { TemaContext } from "../context";
import tema from "../tema";
import Login from "../pages/Login";

const Routes = () => {
	const routes = useRoutes([
		{ path: "/alunos", element: <AlunosListagem /> },
		{ path: "/materias", element: <MateriasListagem /> },
		{ path: "/cadastrar-alunos", element: <CadastrarAlunos /> },
		{ path: "/cadastrar-materias", element: <CadastrarMaterias /> },
		{ path: "/editar-alunos/:id", element: <CadastrarAlunos /> },
		{ path: "/editar-materias/:id", element: <CadastrarMaterias /> },
		{ path: "/login", element: <Login /> },
	]);

	return routes;
};

const App = () => {
	const { temaSelecionado, setTemaSelecionado } = useContext(TemaContext);
	// tema.claro ou tema["claro"] fazem a mesma coisa
	return (
		<Container maxWidth="md" sx={tema[temaSelecionado]}>
			<Routes />
		</Container>
	);
};

export default App;
// TODO: testar se a integração com a API funcionou
// TODO: Adicionar o Dropdown na navbar

//TODO:  Opcional: Na tela de edição de alunos, caso não existam alunos carregados no estado global, implemente um “carregando” (loading) baseado em animação do Lottie da mesma forma que a tela de listagem dos alunos. Para testar esse comportamento basta recarregar a página (f5), já estando na tela de edição do aluno
// TODO: Opcional: Alterar ícones: https://mui.com/material-ui/material-icons/
// TODO: Opcional: Alterar ícones do navbar
// TODO: Opcional: trocar o ícone de loading
// TODO: Opcional: Alterar o tema escuro (Dracula)
