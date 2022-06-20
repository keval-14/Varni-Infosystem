import React from "react"
import './Header.css'
import logo from '../img/logo/vi logo png.png'


function Header()
{
    return(
<>

            <header>
                {/* <img className="logo" src={logo} alt="logo"></img> */}
                <h2 className="logoname">Varni Infosystem</h2>
                <nav>
                    <ul className="nav_links">
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">SERVICES</a></li>
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