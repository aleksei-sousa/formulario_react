import { BiLogoGooglePlus, BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { useState, useEffect } from "react";


function Logar ({verify}){
    const[conta, setConta]= useState([])

    function handleChange (e) {
        setConta({...conta, [e.target.name]: e.target.value})
        console.log(conta)
    }

    const handleSignUp = (e)=> {
        e.preventDefault()
        console.log(email, senha)
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(e)
    }

    return(
        <div className="containerSign1" onSubmit={handleSignUp}>
            <div className="containerForm">
                <form onSubmit={handleSubmit} className={verify? 'sign animacaoDireita' : 'sign animacaoEsquerda'}>
                    <h1 className="tituloLogin">Logar no Diprella</h1>
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
                    <div><p className="emailAcount">Ou use seu e-mail</p></div>
                    <div className="containerInputs">
                        <input
                            type="email"
                            name="email"
                            placeholder='E-mail'
                            onChange={(e)=>handleChange(e)}/>
                        <input
                            type="password"
                            name="password"
                            placeholder='Senha'
                            onChange={(e)=>handleChange(e)}
                            />
                    </div>
                    <a className="recuperarSenha">Esqueceu sua senha?</a>
                    <button id="btnLogin" type="submit">LOGIN</button>
                </form>
            </div>
        </div> 
    )
}
export default Logar