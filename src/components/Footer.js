import React from 'react';
import './footer.css'
// import { BackTop } from 'antd';

const Footer = () => {
  return (
    <>
        <div className='footer row'>
            <div className='col-md-8 col-sm-12'>
                <h2>Adding pace to your business.</h2>
                <button className='contact-btn'>
                        Contact
                </button>
            </div>
            <div className='col-md-4 col-sm-12'> 
                <p className='connect'>Connect with us</p>
                <p className='details'>Email : psthakur@gmail.com</p>
                <p className='details'>Mobile : 9910368109</p>
                
            </div>   
        </div>
    </>
  )
}

export default Footer