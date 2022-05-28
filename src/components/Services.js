import React from 'react'
import './Services.css'
import wd from '../img/icons/webdevelopment.png'
import mad from '../img/icons/mobile-app-development.png'
import sd from '../img/icons/software-development.png'
import webdesign from '../img/icons/web-design.png'
import seo from '../img/icons/seo-and-online-marketing.png'
import job from '../img/icons/cn.jpg'


function Services() {
  return (
    <div>
      
           
        <div class="left"> 

            <h2 className='serviceheading'>Services Offered by Varni Infosystem
        
            </h2>

            <div className="servicecontent">
            We, at Varni Infosystem , are a reckoned organization that believes in offering a stunning design of the website with unmatched user experience. Our services include enterprise-wide software solutions, attractive mobile apps, interactive web designs, digital landscape, result-oriented SEO, and many more. We open the gateways of success in the online realm by offering your web development and digital marketing work to our highly skilled and professional experts. We feed all the digital marketing ethics and custom web design services to help you impactful convey your brand message to your clients.
            </div>
            <div>
            <button className="servicebutton">
                          <a href="http://varniinfosystem.com/" className="link">  Contact Us</a>
                        </button>

            </div>
        </div>

        <div class="center">

            <img className='servicecenterimage1' src={wd}></img>
            <h2 className='servicecentertitle'>Web Development</h2>
            <p className='servicecentercontent'>

            We ensure a seamless viewing experience for your website using the latest technology and programming languages. Our responsive web design services, great UI/UX, clean coding will increase your business potential online...

            </p>
            <a className='readmore' href="#">Read More</a>

            <div>

            <img className='servicecenterimage2' src={mad}></img>
            <h2 className='servicecentertitle'>Mobile App Development</h2>
            <p className='servicecentercontent'>

            Our full-cycle mobile app development services include both native and cross-platform technologies. We don’t just build applications; we believe in crafting top-notch mobile experiences...

            </p>
            <a className='readmore' href="#">Read More</a>
            </div>


            <img className='servicecenterimage3' src={sd}></img>
            <h2 className='servicecentertitle'>Software Development</h2>
            <p className='servicecentercontent'>

            Our software development services include planning, clean coding, designing, programming, testing, bug fixing. Rely on us to get innovative products and to scale your business...

            </p>
            <a className='readmore' href="#">Read More</a>


        </div>
        <div class="right">
            
        <img className='servicerightimage1' src={webdesign}></img>
            <h2 className='servicecentertitle'>Web Design</h2>
            <p className='servicecentercontent'>

            Our team of excellent web designers delivers spot-on results and establishes a clear design procedure. We design an engaging product quickly and easily and meet deadlines...

            </p>
            <a className='readmore' href="#">Read More</a>

            <div>

            <img className='servicerightimage2' src={seo}></img>
            <h2 className='servicecentertitle'>Search Engine Optimization</h2>
            <p className='servicecentercontent'>

            Our well-versed SEO experts implement the best search engine optimization practices and strategies so that you can rank organically on all search engines...

            </p>
            <a className='readmore' href="#">Read More</a>
            </div>

            <img className='servicerightimage3' src={job}></img>
            <h2 className='servicecentertitle'>Search Engine Optimization</h2>
            <p className='servicecentercontent'>

            Our well-versed SEO experts implement the best search engine optimization practices and strategies so that you can rank organically on all search engines...

            </p>
            <a className='readmore' href="#">Read More</a>
            



        </div>

        <div class="clearBoth"></div>






    </div>
  );
}

export default Services
