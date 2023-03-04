import React , {useState} from 'react'
import './headertwo.css'
import { FaAlignJustify, FaTimes} from "react-icons/fa";
import { NavLink} from 'react-router-dom';
import { FaBeer } from 'react-icons/fa';
import { AiOutlineHome ,AiOutlinePhone,AiOutlineSmile,AiOutlineLaptop,AiOutlineUser} from "react-icons/ai";

const HeaderTwo = () => {
    const [menu, setMenu] = useState(false);
    let activeStyle = {
        color:"#F7EC09",
      };
  return (
    <>
    <div className='announcement text-center'>This is in development mode !</div>
    <nav className='main-nav'>
        <div className='name-logo'>
            Prabhat Singh & Associates
        </div>
        <div className={menu ? "nav-links-mobile" : "nav-links"}>
            <ul className='nav-links-ul'>
                <NavLink className='nav-links-ul-li' to="/" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }><AiOutlineHome style={{color:"#fff",margin:5,fontSize:"20px",marginTop:-2}}/>Home</NavLink>
                <NavLink className='nav-links-ul-li' to="/about" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }><AiOutlineSmile style={{color:"#fff",margin:5,fontSize:"20px",marginTop:-2}}/>About</NavLink>
                <NavLink className='nav-links-ul-li' to="/services" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }><AiOutlineLaptop style={{color:"#fff",margin:5,fontSize:"20px",marginTop:-2}}/>Services</NavLink>
                <NavLink className='nav-links-ul-li' to="/contact" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }><AiOutlinePhone style={{color:"#fff",margin:5,fontSize:"20px",marginTop:-2}}/>Contact</NavLink>
            <NavLink className='nav-links-ul-li' to="/mails-auth" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }><AiOutlineUser style={{color:"#fff",margin:5,fontSize:"20px",marginTop:-2}}/>Admin Login</NavLink>
                {/* <NavLink className='nav-links-ul-li'>About</NavLink>
                <NavLink className='nav-links-ul-li' to="/contact">Contact</NavLink>
                <NavLink className='nav-links-ul-li' to="/services">Services</NavLink> */}
                {/* <li className='nav-links-ul-li'>About</li>
                <li className='nav-links-ul-li' to="/contact">Contact</li>
                <li className='nav-links-ul-li' to="/services">Services</li> */}
            </ul>
        </div>
        <div className='hamburger' onClick={()=>setMenu(!menu)}>
            {
                menu ? <FaTimes/> : <FaAlignJustify/>
            }
        </div>
    </nav>
    </>
  )
}

export default HeaderTwo