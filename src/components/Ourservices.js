import React from 'react'
import '../components/Ourservices.css'
import img1 from'../img/logo/Affordable Solutions.jpg'
import img2 from'../img/logo/e-commerce.jpg'
import img4 from'../img/logo/market reputation.jpg'
import img5 from'../img/logo/Quick Turn Around Time.jpg'
import img6 from'../img/logo/Skilled Professionals.jpg'
import img7 from'../img/logo/support.jpg'

function Ourservices() {
  return (
    <div>
         <div className='text-center'>
          <h2 className='ourservicetitle text-center'>
          Our Comprehensive Services
          </h2>
        </div>
    <div className='ourservicemain'>
          <div className='ourserviceleft'>
                <div className='leftup'>
                    <div className='leftupleft'>
                        <img src={img2} className="ourserviceimg"></img>
                    </div>
                    <div className='leftupright'>
                        <h2 className='ourservicechildtitle'>E-Commerce</h2>
                        <p className='ourservicechildcontent'>From creating the best user experience to uploading high-resolution photos, we cater all the characteristics of a successful ecommerce store. We consider even the minute details like comparison capabilities.</p>
                    </div>
                </div>
                 <div className='leftdown'>
                     <div className='leftdownleft'>
                     <img src={img5} className="ourserviceimg"></img>
                     </div>
                    <div className='leftdownright'>
                    <h2 className='ourservicechildtitle'>Quick Turn Around Time
</h2>
                        <p className='ourservicechildcontent'>The time consumed to deliver the fully functional website solution is comparatively lower. This is one of the reasons why we fall under the category of best web development services provider.</p>
                    </div>
                </div>
          </div>
          <div className='ourservicecenter'>
                <div className='centerup'>
                    <div className='centerupleft'>
                    <img src={img4} className="ourserviceimg"></img>
                    </div>
                    <div className='centerupright'>
                    <h2 className='ourservicechildtitle'>Market Reputation
</h2>
                        <p className='ourservicechildcontent'>Want to acquire positive brand content? Take all benefits from WIW and enjoy improved brand’s overall image, higher customer trust, improved marketing efforts, less business risk and many other advantages.</p>
                    </div>
                </div>
                 <div className='centerdown'>
                     <div className='centerdownleft'>
                     <img src={img1} className="ourserviceimg"></img>
                     </div>
                    <div className='centerdownright'>
                    <h2 className='ourservicechildtitle'>Affordable Solutions
</h2>
                        <p className='ourservicechildcontent'>No compromises on quality. Simple, smart, attractive websites and mobile apps are available at affordable prices. Get a website that generates active as well as passive income from WIW and grow your business.</p>
                    </div>
                </div>
          </div>
          <div className='ourserviceright'>
                <div className='rightup'>
                    <div className='rightupleft'>
                    <img src={img6} className="ourserviceimg"></img>
                    </div>
                    <div className='rightupright'>
                    <h2 className='ourservicechildtitle'>Skilled Professionals
</h2>
                        <p className='ourservicechildcontent'>All team members at our online platform are highly versed in their fields. They have been a part of successful companies and have acquired knowledge on how to provide industry-ready and result-oriented solutions.</p>
                    </div>
                </div>
                <div className='rightdown'>
                    <div className='rightdownleft'>
                    <img src={img7} className="ourserviceimg"></img>
                    </div>
                    <div className='rightdownright'>
                    <h2 className='ourservicechildtitle'>24*7 Support
</h2>
                        <p className='ourservicechildcontent'>Our round the clock services provide conveniency to you all the time. You can reach us to ask any queries related to our services of web development, search engine optimization, mobile app development, etc.</p>
                    </div>
                </div>
          </div>
          </div>
        </div>





  )
}

export default Ourservices
