import React from 'react'
import img from '../img/poster/process.jpg'
import '../components/Process.css'

function Process() {
  return (
    <div>
      <div className='processmain'>
            <div className='processtitle text-center'>
            Our Process
            </div>
            <div className='processcontent'>
            Our successful web development and SEO initiatives start with analyzing your business goals and objectives. We then build a map for your mission of building a website, mobile application. We would also work to establish consensus to make outcome-based KPIs. After the formulation step, we craft a business strategy so that you can outshine the competition. The next step is to hand over the detailed analysis to professionals. Moreover, we also provide detailed reports to keep everything transparent.
            </div>
            <div className='processimgcontent'>
                <div>

                    <img src={img} className='processimg'></img>

                </div>
                <div className='processaccordion'>
                <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Research And Discovery
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Collecting information about the project details, vision and ultimate goal begins the web or mobile app development process. During the initial research efforts, we understand the purpose, target audience of the project. Creating wireframes, planning a roadmap are the beginning phases. The wireframes are then transformed into menus, color graphics, buttons, animations and typography, and more.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Implementation
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Front-end development and back-end development take place in this step. The developers ensure user-friendly and fascinating web design. The back-end code includes integration of business logic, server-side, database. To effectively communicate the brand message, we add articulated content to the website. We add calls-to-action, write creative texts, headlines so that your business can make an impact on the reader.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Testing And Deployment
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      The phase eliminates bugs, improve compatibility, functionality, usability, and performance. We ensure that when the software is handed over to you, it runs smoothly without a glitch. We also take care of the post-deployment and maintenance to facilitate you.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
      After Sales Service
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      We stay with our clients from end-to-end. We focus on providing our helping hand even after delivering our services. Our technical experts would be available for you round the clock. Raise the issue with our team and we will start working on it instantly.
      </div>
    </div>
  </div>
</div>






                </div>





            </div>














      </div>
    </div>
  )
}

export default Process
