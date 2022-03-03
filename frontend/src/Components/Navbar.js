import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import logo from '../Images/logo.png'
import './Navbar.css'

const Navbar = () => {

const [click, setClick] = useState(false)

const startClick = () => setClick(!click)



    return (
        <div className='navbar'>
            <div className='logo'>
                <img src={logo} alt ='logo' />
                </div>
                <ul className={click ?  'nav-menu active' : 'nav-menu'}>
                    <li className= 'nav-item'><a href='/'>Home</a></li>
                    <li className= 'nav-item'><a href='/'>About Us</a></li>
                    <li className= 'nav-item'><a href='/'>Brewery</a></li>
                    <li className= 'nav-item'><a href='/'>Login</a></li>
                    <li className= 'nav-item'><a href='/'>Our Team</a></li>
                    <li className= 'nav-item'><a href='/'>Contact</a></li>
                </ul>
                <div className='hamburger' onClick={startClick}>

                    { click ? (<FaTimes size={30} style={{color: '#f8f8f8' }}/>) : (<FaBars size={30} style={{color: '#f8f8f8' }} />)}
                    
                </div> 


        </div>
    )
}

export default Navbar