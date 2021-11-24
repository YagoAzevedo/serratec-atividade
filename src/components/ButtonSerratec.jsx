import Button from "@mui/material/Button";

const ButtonSerratec = (props) => {
  return (
  <Button sx={{ 
      backgroundColor: props.temaSelecionado === "claro" ? "#fff": "#000"
    }}>
    {props.children}
  </Button>
  )
};

export default ButtonSerratec;
