import { BiLogoGooglePlus, BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { useState } from "react";
import{AiOutlineMail}       from 'react-icons/ai';
import{BsPerson}            from 'react-icons/bs';
import{RiLockPasswordLine}  from 'react-icons/ri';

function Registrar ({verify}){

    const[conta, setConta] = useState([])

    function handleChange(e) {
        
        setConta({...conta, [e.target.name]: e.target.value})
        console.log(conta)
    }

    function handleSubmit(e) {
        e.preventDefault()
    }
    return(
        <div className="containerRegister">
            <div className="containerForm">
                {/* <form className="register rDireita"> */}
                <form onSubmit={handleSubmit} className={verify? 'register rDireita' : 'register rEsquerda'}>
                    <h1 className="tituloLogin">Crie uma conta</h1>
                    <div className="containerSocialMidias">
                        <div className="socialMidias">
                            <BiLogoFacebook className='icone' size='23px'/>
                        </div>
                        <div className="socialMidias">
                            <BiLogoGooglePlus className='icone' size='27px'/>
                        </div>
                        <div className="socialMidias">
                            <BiLogoLinkedin className='icone' size='20px'/>
                        </div>
                    </div>
                    <div><label htmlFor="idNome" className="emailAcount">Ou use seu e-mail para se cadastrar</label></div>
                    <div className="containerInputs">
                        <input
                          type="text"
                          name="nome"
                          placeholder='Nome'
                          onChange={(e)=>handleChange(e)}/>
                        <input
                          type="email"
                          name="email"
                          placeholder='E-mail'
                          onChange={(e)=>handleChange(e)}/>
                        <input
                          type="password"
                          name="password"
                          placeholder='Senha'
                          onChange={(e)=>handleChange(e)}/>
                    </div>
                    <button id="btnCadastrar" type="submit">Cadastrar</button>
                </form>
            </div>            
        </div> 
    )
}
export default Registrar