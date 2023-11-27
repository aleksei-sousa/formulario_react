import { useState } from 'react'
import './Side.css'
var validador = false

export default function SideForm ({setVerify, verify}) {

    const [msgBtn, setMsgBtn] = useState(false)
    
    function change(e){
        setVerify(current => !current)
        const txtBtn = e.target
        console.log(txtBtn)
        txtBtn.classList.add('msg_btn_inversao')

        setTimeout((e)=>{
             txtBtn.classList.remove('msg_btn_inversao')
         }, 1000)
        setTimeout((e)=>{
             setMsgBtn(current => !current)
        }, 300)
    }


    return(

            <div className={verify? 'helloSign sideLeft' : 'helloSign sideRight'}>

                    <button
                      className="btn_inversao"
                      onClickCapture={(e)=>change(e)}>
                      <div className='btn'>{msgBtn?'Logar':'Cadastrar'}</div>
                    </button>


            </div>

    )
}