import React from 'react';
import { Link } from 'react-router-dom';
const setting = () =>{
    return(
        <>
        <h1>settings</h1>
        <button><Link to ='/'>Front</Link></button>
        <button><Link to ='/savedarticles'>Back</Link></button>
        </>
    )
}
export default setting;