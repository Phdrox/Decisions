import * as React from 'react';
import { Button } from '@mui/base/Button';
import { useState,useEffect } from 'react';

import styles from './Button.module.css'





export interface IVoteProps {
    questionb:number|string
    questionw:number|string
}

export function Vote({questionb,questionw}:IVoteProps){
 
    const[votosblack,setVotoB]=useState(0);
    const[votoswhite,setVotoW]=useState(0);



const handleChangeB=()=>{
    
    setVotoB(votosblack+1)
}

const handleChangeW=()=>{
    
    setVotoW(votoswhite+1)
}




    return(
    <div >
        <div className={styles.votes}>
    <Button onClick={handleChangeB} className={styles.buttonB}>{questionb}<br/>{votosblack}</Button>
    <Button onClick={handleChangeW} className={styles.buttonW}>{questionw}<br/>{votoswhite}</Button>
  </div>
  </div>
    )
}


export default Vote

