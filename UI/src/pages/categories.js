import React from 'react';
import './categories.css';
import { Link } from 'react-router-dom';
const categories = () =>{
    return(
        <>
        <div className='categories'>
        <h1 >categories</h1>
        <button><Link to ='/home'>Back</Link></button>
        <button><Link to ='/savedarticles'>Front</Link></button>
        </div>
        </>
    )
}
export default categories;