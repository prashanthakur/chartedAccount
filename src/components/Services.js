import React from 'react'
import './services.css'
import icon from '../images/tax3.png'
import icon2 from '../images/tax2.jpg'
import icon3 from '../images/rent.png'
import icon4 from '../images/license.jpg'
import icon5 from '../images/income-tax.jpg'
import icon6 from '../images/star-health.png'

import Parallax from 'react-rellax'

const Services = () => {
  return (
    <>
    <div className='services-main row'>
      <h1 className='text-center mt-4'>All Services</h1>
      <div className='services-card col-md-2 col-sm-12'>
        <div className='text-center'>
          <img src={icon}/>
        </div>
        <div>
          <p className='allservices-texts'>GST Registration and return filing</p>
        </div>
      </div>
      <div className='services-card col-md-2 col-sm-12'>
        <div className='text-center'>
          <img src={icon}/>
        </div>
        <div>
          <p className='allservices-texts'>Income Tax filing</p>
        </div>
      </div>
      <div className='services-card col-md-2 col-sm-12'>
        <div className='text-center'>
          <img src={icon}/>
        </div>
        <div>
          <p className='allservices-texts'>Accounting & book keeping</p>
        </div>
      </div>
      <div className='services-card col-md-2 col-sm-12'>
        <div className='text-center'>
          <img src={icon}/>
        </div>
        <div>
          <p className='allservices-texts'>Audit & Assurance</p>
        </div>
      </div>
      {/* Another 4 cards starts here */}
      <div className='services-card col-md-2 col-sm-12'>
        <div className='text-center'>
          <img src={icon}/>
        </div>
        <div>
          <p className='allservices-texts'>Advisory</p>
        </div>
      </div>
      <div className='services-card col-md-2 col-sm-12'>
        <div className='text-center'>
          <img src={icon}/>
        </div>
        <div>
          <p className='allservices-texts'>Investment & financial planning</p>
        </div>
      </div>
      <div className='services-card col-md-2 col-sm-12'>
        <div className='text-center'>
          <img src={icon}/>
        </div>
        <div>
          <p className='allservices-texts'>Accounting & book keeping</p>
        </div>
      </div>
      <div className='services-card col-md-2 col-sm-12'>
        <div className='text-center'>
          <img src={icon}/>
        </div>
        <div>
          <p className='allservices-texts'>Accounting & book keeping</p>
        </div>
      </div>

    </div> 
    {/* main ending div */}

    <div class="row justify-content-around">
    <h2 className='text-center mt-3'>
      Other Services
    </h2>
      <div class="col-md-5 other-service-cards">
        <div>
        <img src={icon3}/>
        <span className='texts-others-services'>Rent agreements</span>
        </div>
        
      </div>
      <div class="col-md-5 other-service-cards">
        <img src={icon4}/>
        <span className='texts-others-services'>Driving License</span>
      </div>
      <div class="col-md-5 other-service-cards">
      <img src={icon5}/>
        <span className='texts-others-services'>TDS return filing</span>
      </div>
      <div class="col-md-5 other-service-cards">
        <img src={icon6}/>
        <span className='texts-others-services'>Star health insurance</span>
        </div>
    </div>
    </>
  )
}

export default Services