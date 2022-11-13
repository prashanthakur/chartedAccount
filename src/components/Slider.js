import React from 'react';
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.css'
import Google from '../images/google.png'
import Adhar from '../images/adhar.png'

const SliderComponent = () => {

    var settings = {
        dots: false,
        infinite: true,
        autoplay:true,
        speed: 100,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
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
        <img src={Google}/>
      </div>
      <div className='slides-div'>
        <img src={Adhar}/>
      </div>
      <div className='slides-div'>
        <img src={Google}/>
      </div>
      <div className='slides-div'>
        <img src={Google}/>
      </div>
      <div className='slides-div'>
        <img src={Google}/>
      </div>
    </Slider>
  )
}

export default SliderComponent