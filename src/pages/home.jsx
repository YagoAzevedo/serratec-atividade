import './../index.css';
import {PerfilBia, PerfilGustavo, PerfilGG, PerfilGilnei, PerfilRodrigo} from "../components/Perfis";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
 
 const home =()=>{
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
    return(
        
    <>
        <div className='Homebody'>
        <h1>Seja bem-vindo ao portal do colobarador.</h1>
        <h3>Aqui você pode cadastrar e remover alunos,materias.</h3>
        <h3>Aproveite!</h3>
        
        <h1 className="spaced-top">Conheça os nossos desenvolvedores:</h1>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={4} className="centralizar">
          <Item><PerfilBia/></Item>
        </Grid>
        <Grid item xs={4} className="centralizar">
          <Item><PerfilGustavo/></Item>
        </Grid>
        <Grid item xs={4} className="centralizar">
          <Item><PerfilGG/></Item>
        </Grid>
        <Grid item xs={6} className="centralizar">
          <Item><PerfilGilnei/></Item>
        </Grid>
        <Grid item xs={6} className="centralizar">
          <Item><PerfilRodrigo/></Item>
        </Grid>
      </Grid>
    </Box>

    </div>
</>
 )
}

export default home;
