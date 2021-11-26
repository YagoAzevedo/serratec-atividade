import {createContext, useState} from "react";

const estadoinicial = {
    materias:[],
    setMaterias:()=>{},
};

const MateriaContext = createContext(estadoinicial);

const MateriaProvider = ({children}) => {
    const [materias, setMaterias] = useState(estadoinicial.materias);

    return (
       < MateriaContext.Provider value={{materias, setMaterias}}>
           {children}
        </MateriaContext.Provider>

    );
};

export {MateriaProvider}
export default MateriaContext;