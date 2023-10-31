import * as React from 'react';
import { ChangeEvent } from 'react';
import { useState } from 'react';

import styles from './AreaText.module.css'
import { IContent} from '../interface/Content';
import Vote from './Vote';





export interface IAreaProps {
    setList?:React.Dispatch<React.SetStateAction<IContent[]>>
    lista:IContent[];
}


function Area({setList,lista}:IAreaProps){

    const[perguntaA,setQuestionB]=useState<string>('');
    const[perguntaB,setQuestionW]=useState<string>('');
    const[nome,setName]=useState<string>('');


const handleChangeBlack=(e:ChangeEvent<HTMLInputElement>)=>{
 setQuestionB(e.target.value)
}

const handleChangeWhite=(e:ChangeEvent<HTMLInputElement>)=>{
   setQuestionW(e.target.value)
}

const handleChangeName=(e:ChangeEvent<HTMLTextAreaElement>)=>{
    setName(e.target.value)
 }





const handleAddQuestion=(e:React.FormEvent)=>{
    e.preventDefault();
    
    const id=Math.floor(Math.random()*1000);
    const novaLista:IContent={perguntaA,perguntaB,nome,id}
    setList!([...lista,novaLista])
    setQuestionB('')
    setQuestionW('')
    setName('')
}



    return(
        <div>  
    
 <form className={styles.form} onSubmit={handleAddQuestion}>

  <input type="text" name='pergunta'onChange={handleChangeBlack} className={styles.area} placeholder="Opção 1" value={perguntaA} required/>
  <input type="text" name='pergunta'onChange={handleChangeWhite} className={styles.area} placeholder="Opção 2"  value={perguntaB} required/>
  <textarea onChange={handleChangeName} className={styles.comentario} placeholder='coloque sua pergunta' value={nome} />

  <input type="submit" value="Enviar" />
</form>

</div>
    )
}

export default Area