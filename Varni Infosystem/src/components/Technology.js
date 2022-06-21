import React from 'react'
import '../components/Technology.css'
import img1 from'../img/logo/.net.png'
import img2 from'../img/logo/seo.png'
import img3 from'../img/logo/googleanalytics.png'
import img4 from'../img/logo/html.png'
import img5 from'../img/logo/wordpress.png'
import img6 from'../img/logo/magento.png'


function Technology() {
  return (
    <div>
      <div className='technologymain text-center'>
          <h2 className='techtitle text-center'>
          Our Technologies
          </h2>
          <h4 className='techtagline'>
              what we use for Our Client
            </h4>

        <div className='techimg'>
            <img src={img1} className="techlogo" alt=".net"></img>
            <img src={img2} className="techlogo" alt="SEO"></img>
            <img src={img3} className="techlogo" alt="Google Analytics"></img>
            <img src={img4} className="techlogo" alt="HTML"></img>
            <img src={img5} className="techlogo" alt="Wordpress"></img>
            <img src={img6} className="techlogo" alt="Magento"></img>
        
        </div>
      </div>
    </div>
  )
}

export default Technology
