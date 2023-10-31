import * as React from 'react';
import { IContent } from '../interface/Content';
import { useState } from 'react';
import { Link, } from 'react-router-dom';
import { IAreaProps } from '../components/AreaText';


export interface IPerfilProps {

}

export function Perfil (props: IPerfilProps) {


  
    return (
    <div>
      
      <Link to="/">Back</Link>
    <h1>{}</h1>
        
      
      
    </div>
  );
}
