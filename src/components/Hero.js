import React from 'react'
import "./hero.css"
import Tax from "../images/tax3.png"
import { motion } from "framer-motion"
import Parallax from 'react-rellax'
import { TypeAnimation } from 'react-type-animation';

// const Framevariants = {
//     hover:{
//       // scale:1.1
//     },
//     visible:{
//       y:[-10,10],
//       transition:{ delay : 2,
//         yoyo: Infinity
//       }
//     }
//   }

const Hero = () => {
  return (
    <>
      <div className='main-hero row'>
        <motion.div className='left-content col-md-5'
          //  variants={Framevariants}
          //  animate="visible"
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
        // transition={transition}
        >
          <Parallax speed={4}>
            <img src={Tax} alt="tax" />
          </Parallax>
        </motion.div>

        <div className='right-content col-md-5 col-10'>
          {/* <Parallax speed={6}>
                <p className='main-line'>Quality work in accounting.</p>
                <p className='secondary-line'>Perfect service, perfect business</p>
            </Parallax> */}
          <p className='main-line'>Quality work in</p>
          <TypeAnimation
            sequence={[
              'Accounting.', // Types 'One'
              1000, // Waits 1s
              'Gst services.', // Deletes 'One' and types 'Two'
              2000, // Waits 2s
              'Income tax.', // Types 'Three' without deleting 'Two'
              2000,
              () => {
                console.log('Done typing!'); // Place optional callbacks anywhere in the array
              }
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: '60px' ,color:"#fff"}}
          />
          <p className='secondary-line'>Perfect service, perfect business</p>
          {/* <button className='connect-btn'>
                  Contact
                </button> */}
        </div>
        <div className='svg'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#d8d4d8" fill-opacity="1" d="M0,288L1440,96L1440,320L0,320Z"></path></svg>
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#d8d4d8" fill-opacity="1" d="M0,64L21.8,74.7C43.6,85,87,107,131,117.3C174.5,128,218,128,262,133.3C305.5,139,349,149,393,176C436.4,203,480,245,524,261.3C567.3,277,611,267,655,234.7C698.2,203,742,149,785,149.3C829.1,149,873,203,916,192C960,181,1004,107,1047,74.7C1090.9,43,1135,53,1178,85.3C1221.8,117,1265,171,1309,197.3C1352.7,224,1396,224,1418,224L1440,224L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path></svg> */}
        </div>


        <Parallax speed={6}>
          <div className='parallax'>
          </div>
        </Parallax>
        <Parallax speed={2}>
          <div className='parallax-one'>
          </div>
        </Parallax>
        <Parallax speed={4}>
          <div className='parallax-two'>
          </div>
        </Parallax>
      </div>
    </>
  )
}

export default Hero