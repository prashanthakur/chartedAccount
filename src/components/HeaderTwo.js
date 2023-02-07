import React , {useState} from 'react'
import './headertwo.css'
import { FaAlignJustify, FaTimes} from "react-icons/fa";
import { NavLink} from 'react-router-dom';

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
            }>Home</NavLink>
                <NavLink className='nav-links-ul-li' to="/about" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>About</NavLink>
                <NavLink className='nav-links-ul-li' to="/services" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Services</NavLink>
                <NavLink className='nav-links-ul-li' to="/contact" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Contact</NavLink>
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