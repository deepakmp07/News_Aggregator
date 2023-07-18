import React from 'react';
import { Link } from 'react-router-dom';
const savedarticles = () =>{
    return(
        <>
        <h1>savesarticles</h1>
        <button><Link to ='/categories'>Front</Link></button>
        <button><Link to ='/settings'>Back</Link></button>
        </>
    )
}
export default savedarticles;