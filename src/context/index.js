import {TemaProvider} from "./tema";
import {AlunoProvider} from "./aluno";
import {MateriaProvider}from "./materia";

const GlobalContext = ({children}) =>{
    return (
    <TemaProvider>
        <AlunoProvider>
            <MateriaProvider>
                {children}
            </MateriaProvider>
        </AlunoProvider>
    </TemaProvider>
    );
}

export default GlobalContext;