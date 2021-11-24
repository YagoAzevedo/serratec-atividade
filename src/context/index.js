import { createContext, useState } from "react";

export const TemaContext = createContext();
export const TemaProvider = ({children}) => {
  const [temaSelecionado, setTemaSelecionado] = useState(
    "claro" // informa o valor inicial do estado
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