import React from 'react'
import "./hero.css"
import Tax from "../images/tax3.png"
import { motion} from "framer-motion"
import Parallax from 'react-rellax'

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
              <img src={Tax} alt="tax"/>
              </Parallax>
            </motion.div>
      
            <div className='right-content col-md-5 col-10'>
            {/* <Parallax speed={6}>
                <p className='main-line'>Quality work in accounting.</p>
                <p className='secondary-line'>Perfect service, perfect business</p>
            </Parallax> */}
                <p className='main-line'>Quality work in accounting.</p>
                <p className='secondary-line'>Perfect service, perfect business</p>
                {/* <button className='connect-btn'>
                  Contact
                </button> */}
            </div>
            <div className='svg'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F7EC09" fill-opacity="1" d="M0,288L1440,96L1440,320L0,320Z"></path></svg>
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