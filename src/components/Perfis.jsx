import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const PerfilGustavo = () =>{
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
const PerfilBia = () =>{
    return(
        <Card sx={{ maxWidth: 145 }}>
        <CardMedia
          component="img"
          alt="Beatriz Nolasco"
          height="150px"
          image="https://avatars.githubusercontent.com/u/89035781?v=4"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Beatriz Nolasco
          </Typography>
         
        </CardContent>
        <CardActions>
          <Button size="small"><a href="https://www.linkedin.com/in/beatriz-nolasco-3921b0221/"  target="_blank">Linkedin</a></Button>
          <Button size="small"><a href="https://github.com/trizisbea"  target="_blank">Github</a></Button>
        </CardActions>
      </Card>
    )
}


const PerfilGG = () =>{
    return(
        <Card sx={{ maxWidth: 145 }}>
        <CardMedia
          component="img"
          alt="Guilherme Gusman"
          height="150px"
          image="https://avatars.githubusercontent.com/u/88348235?v=4"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Guilherme Gusman
          </Typography>
         
        </CardContent>
        <CardActions>
          <Button size="small"><a href="www.linkedin.com/in/guilherme-gusman"  target="_blank">Linkedin</a></Button>
          <Button size="small"><a href="https://github.com/GGDadnis"  target="_blank">Github</a></Button>
        </CardActions>
      </Card>
    )
}

const PerfilGilnei = () =>{
    return(
        <Card sx={{ maxWidth: 145 }}>
        <CardMedia
          component="img"
          alt="Gilnei Lima"
          height="150px"
          image="https://avatars.githubusercontent.com/u/78995998?v=4"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Gilnei Lima
          </Typography>
         
        </CardContent>
        <CardActions>
          <Button size="small"><a href="https://www.linkedin.com/in/gilnei-lima"  target="_blank">Linkedin</a></Button>
          <Button size="small"><a href="https://github.com/gilneilima"  target="_blank">Github</a></Button>
        </CardActions>
      </Card>
    )
}

const PerfilRodrigo = () =>{
    return(
        <Card sx={{ maxWidth: 145 }}>
        <CardMedia
          component="img"
          alt="Rodrigo Calmon"
          height="150px"
          image="https://avatars.githubusercontent.com/u/89034960?v=4"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Rodrigo Calmon
          </Typography>
         
        </CardContent>
        <CardActions>
          <Button size="small"><a href="https://www.linkedin.com/in/rodrigo-calmon/"  target="_blank">Linkedin</a></Button>
          <Button size="small"><a href="https://github.com/rodrigoccalmon"  target="_blank">Github</a></Button>
        </CardActions>
      </Card>
    )
}

export {PerfilBia, PerfilGustavo, PerfilGG, PerfilGilnei, PerfilRodrigo };




