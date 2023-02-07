import React from 'react';
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.css'
// import Google from '../images/google.png'
// import Adhar from '../images/adhar.png'
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa'

const SliderComponent = () => {

    var settings = {
        dots: false,
        infinite: true,
        autoplay:true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <Slider {...settings} className="slider">
      <div className='slides-div'>
        {/* <img src={Google}/> */}
        <p><FaQuoteLeft className='quote-icon'/>We help you in retirement planning.<FaQuoteRight className='quote-icon'/></p>
      </div>
      <div className='slides-div'>
        <p><FaQuoteLeft className='quote-icon'/>File your income tax return with us.<FaQuoteRight className='quote-icon'/></p>
      </div>
      <div className='slides-div'>
        <p><FaQuoteLeft className='quote-icon'/>Get all gst solution for your bussiness.<FaQuoteRight className='quote-icon'/></p>
      </div>
    </Slider>
  )
}

export default SliderComponent