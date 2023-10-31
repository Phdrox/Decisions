import React, { useState } from 'react';
import {BsFillTrash3Fill} from "react-icons/bs";
import styles from './App.module.css';
import Area from './components/AreaText';
import { IContent} from './interface/Content';
import Card from './components/Card';




function App() {


  const[list,setList]=useState<IContent[]>([])
  

  
  const handleDelete=(id:number)=>{
   setList( list.filter((trash)=>trash.id!==id))
  }



  return (


   
    <div className={styles.main}>
  
  <div className={styles.menu}>
    <div className={styles.logo}>Decisions</div>
    <div className={styles.perfil}></div>
    <ul>
     
   <li>Perfil</li>
    <li >Opinões</li>
    </ul>

  </div>
 
  <div className={styles.cards}> 
  <Area lista={list} setList={setList}/>
  {list.length===0 ?<p>Não há decisões </p>: list.map((list,key)=>(
  <div className={styles.coment}><Card questionb={list.perguntaA} questionw={list.perguntaB} name={list.nome} /> <i onClick={()=>{return handleDelete(list.id)}}><BsFillTrash3Fill/></i> </div>
))}

  
   </div>
    
   
  </div>
  );
}

export default App;
