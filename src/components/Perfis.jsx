import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const perfis = () =>{
    return(
        <Card sx={{ maxWidth: 145 }}>
        <CardMedia
          component="img"
          alt="Gustavo Barros"
          height="150px"
          image="https://avatars.githubusercontent.com/u/89035958?v=4"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Gustavo Barros
          </Typography>
         
        </CardContent>
        <CardActions>
          <Button size="small"><a href="https://www.linkedin.com/in/gustavo-j-barros-2b3691a8/"  target="_blank">Linkedin</a></Button>
          <Button size="small"><a href="https://github.com/gustavojb92"  target="_blank">Github</a></Button>
        </CardActions>
      </Card>
    )
}

export default perfis;