import React from "react";
// import {Jumbotron, Container, Button} from "reactstrap";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
// import img1 from '../img/hero-bg.jpg'
import '../App.css'
import '../index.css'
import './Intro.css'


const Intro=() => {

        return(

            <div>
                    <div className="intro" id="intro">
                
                        <h2 className="onimgtext">
                        Delivering digital transformation for progressive brands.
                        </h2>
                        <p className="onimgtagline">
                        We prepare businesses for eventuality & with our elastic teams for web, mobile & eCommerce across various industries.
                        </p>
                        <button className="buttonintro">
                          <a id="buttonintro" href="http://varniinfosystem.com/" className="link">  Get Started </a>
                        </button>
                    </div>

                    <div>


                    </div>

            </div>

        )


}


export default Intro;