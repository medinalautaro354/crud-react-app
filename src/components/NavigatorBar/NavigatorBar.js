import React from 'react'
import {Link} from 'react-router-dom';
import './NavigatorBar.css';

const NavigatorBar = () =>{
    return(
        <nav className='col-12 col-md-8'>
            <Link to={'/'}>Todos los posts</Link>
            <Link to={'/crear'}>Nuevo Post</Link>
        </nav>
    )
}

export default NavigatorBar;