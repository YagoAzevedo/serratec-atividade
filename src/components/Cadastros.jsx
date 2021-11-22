import styled from "styled-components";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";

const Form = styled.form`
  display: flex;
  margin-top: 25px;
  flex-direction: column;
`;

const InputCadastro = styled(TextField)`
  width: 500px;
  margin: 15px auto;
  background-color: white;
`;

const ButtonCadastro = styled(Button)`
  width: 500px;
  margin: 10px auto;
`;

export { Form, InputCadastro, ButtonCadastro };
