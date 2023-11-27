import { useState, useEffect } from 'react';
import Registrar from './Registrar'
import Logar from './Logar'
import { BiLogoGooglePlus, BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import SideForm from './SideForm'



function Form (){

    

    const [verify, setVerify] = useState(false)
    console.log(verify)

        useEffect(()=>{
        const sign = document.querySelector('.sign')
        //sign.classList.remove('sign')
        sign.classList.remove('animacaoDireita')
        console.log(sign.classList)
        const hello = document.querySelector('.helloSign')
        //hello.classList.remove('helloSign')
        hello.classList.remove('sideRight')
        const rg = document.querySelector('.register')
        rg.classList.remove('rEsquerda')
        //rg.classList.remove('')
        
    },[])



    return(
        //https://www.wallpaperflare.com/mountains-best-for-desktop-background-wallpaper-tzpnp
        // <div className="containerForm1">
            <div className="contentForm">

                <Logar verify={verify}/>
                <SideForm setVerify={setVerify} verify={verify} />
                <Registrar verify={verify}/>
                {verify}
                
            </div>
        // </div>
    )
}
export default Form