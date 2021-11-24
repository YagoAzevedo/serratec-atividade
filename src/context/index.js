import { TemaProvider } from "./tema";

const GlobalContext = ({ children }) => {
  return <TemaProvider>{children}</TemaProvider>;
};

export default GlobalContext;