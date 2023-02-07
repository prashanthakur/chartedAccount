import React from 'react';
import './footer.css'
// import { BackTop } from 'antd';
import Swal from 'sweetalert2'

const Footer = () => {
  return (
    <>
        <div className='footer row'>
            <div className='col-md-8 col-sm-12'>
                <h2>Adding pace to your business.</h2>
                <button className='contact-btn' onClick={()=>Swal.fire({
                  title: 'Coming soon...',
                  // text: 'Do you want to continue',
                  icon: 'info',
                  confirmButtonText: 'Ok'
                })}>
                  Contact
                </button>
            </div>
            <div className='col-md-4 col-sm-12'> 
                <p className='connect'>Connect with us</p>
                <p className='details'>Email : thakurps9990@gmail.com</p>
                <p className='details'>Mobile : 9354277437</p>
                
            </div>   
        </div>
    </>
  )
}

export default Footer