import './../index.css';
import Perfis from "../components/Perfis";
 
 const home =()=>{
    return(
    <>
        <div className='Homebody'>
        <h1>Seja bem-vindo ao portal do colobarador.</h1>
        <h3>Aqui você pode cadastrar e remover alunos,materias.</h3>
        <h3>Aproveite!</h3>
       
       <Perfis />

    </div>
</>
 )
}

export default home;
