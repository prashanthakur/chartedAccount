import { useEffect } from "react";
import Hero from "./components/Hero";
import HeaderTwo from "./components/HeaderTwo";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
// import ComingSoon from 'react-coming-soon'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Services from "./components/Services";
// import Form from "./components/Form";
import ComingSoon from "./components/ComingSoon";
import ContactUs from "./components/ContactUs";
import Form from "./components/Form";
import AOS from 'aos';
import 'aos/dist/aos.css';


const HomeApp = () => {
  return (
    <>
      <Hero/>
      <Card/>
      <Slider/>
      <Form/>
      {/* <ContactUs/> */}
    </>
  )
}


function App() {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
      <Router>
         <HeaderTwo/>
        <Routes>
          <Route path="/" element={<HomeApp/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="*" element={<ComingSoon/>}/>
        </Routes>
        <Footer/> 
      </Router>
  );
}

export default App;
