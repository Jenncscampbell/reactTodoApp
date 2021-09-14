import React from 'react'
import ReactLogo from './ReactLogo'


const Header = () => {
    return (
       <>
         <ReactLogo />
        <div className='logo-header'>
            <h1> <span style={{color:'lightblue' }} > ReactJS :  </span> To-Do List</h1>
        </div>
        </>
    )
}

export default Header
