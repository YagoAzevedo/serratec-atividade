import { useContext } from "react";
import { TemaContext } from "../context";
import tema from "../tema";

const DefaultPage = (props) => {
  const { temaSelecionado, setTemaSelecionado } = useContext(TemaContext);
  return <div style={tema[temaSelecionado]}>{props.children}</div>;
};

export default DefaultPage;