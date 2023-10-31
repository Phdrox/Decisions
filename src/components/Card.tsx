import React, { useEffect, useState } from 'react';
import styles from './Card.module.css';
import Vote from './Vote';
export interface ICard{
    questionb:string|number
    questionw:string|number
    name:string|number
    
   
    

}

function Card({questionb,questionw,name}:ICard) {





return (
    <div className={styles.card}>
<div className={styles.headercard}><h1>{name}</h1> </div>
       <Vote questionb={questionb} questionw={questionw}/>
    </div>
  );
}

export default Card;