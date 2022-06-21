import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import App from "./components/App";
import DefaultPage from "./components/DefaultPage";
import { TemaProvider, UsuarioProvider, AlunoProvider } from "./context";


ReactDOM.render(
	<React.StrictMode>
		<UsuarioProvider>
			<AlunoProvider>
				<TemaProvider>
					<DefaultPage>
						<BrowserRouter>
							<Navbar />
							<App />
						</BrowserRouter>
					</DefaultPage>
				</TemaProvider>
			</AlunoProvider>
		</UsuarioProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
