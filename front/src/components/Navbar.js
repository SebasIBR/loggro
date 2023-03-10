import React from 'react'
import logo from '../assets/images/loggroLogo.png'
import '../assets/css/navBar.css'

function NavBar() {
    return (
        <nav className='navBar'>
            <div className='logoContainer'>
            <img src={logo} className="logo" alt="logo" />
            </div>
            <div className='navBarContainer'>
                <a href='https://loggro.com/nosotros/'>Nosotros</a>
                <a href='https://loggro.com/pymes/'>Ofertas</a>
                <a href='https://loggro.com/contactenos/'>Contacto</a>
            </div>
        </nav>
    )
}
export default NavBar