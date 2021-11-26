import {createContext, useState} from "react";

const estadoinicial = {
    alunos:[],
    setAlunos:()=>{},
};

const AlunoContext = createContext(estadoinicial);

const AlunoProvider = ({children}) => {
    const [alunos, setAlunos] = useState(estadoinicial.alunos);

    return (
       < AlunoContext.Provider value={{alunos, setAlunos}}>
           {children}
        </AlunoContext.Provider>

    );
};

export {AlunoProvider}
export default AlunoContext;