import React from "react"
import './Header.css'
import logo from '../img/logo/vi logo png.png'
// import { Link } from "react-router-dom";


function Header()
{
    return(
<>

            <header id="header">
                {/* <img className="logo" src={logo} alt="logo"></img> */}
                <h2 className="logoname">Varni Infosystem</h2>
                <nav>
                    <ul className="nav_links">
                        <li><a href="#header">HOME</a></li>
                        <li><a href="#services">SERVICES</a></li>
                        <li><a href="#">PRICING</a></li>
                        <li><a href="#">ABOUT US</a></li>
                

                    </ul>
                </nav>
                <a className="cta" href="#"><button>Contact Us</button></a>
            </header>
      

</>
  

    );
}

export default Header;