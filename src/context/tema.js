import { createContext, useState } from "react";

const estadoInicial = {
  temaSelecionado: "claro",
  setTemaSelecionado: () => {},
};
const TemaContext = createContext(estadoInicial);

const TemaProvider = ({ children }) => {
  const [temaSelecionado, setTemaSelecionado] = useState(
    estadoInicial.temaSelecionado
  );

  return (
    <TemaContext.Provider
      value={{
        temaSelecionado,
        setTemaSelecionado,
      }}
    >
      {children}
    </TemaContext.Provider>
  );
};

export { TemaProvider };
export default TemaContext;
