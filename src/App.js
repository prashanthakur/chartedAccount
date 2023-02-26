import { useEffect } from "react";
import Hero from "./components/Hero";
import HeaderTwo from "./components/HeaderTwo";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
// import ComingSoon from 'react-coming-soon'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Services from "./components/Services";
// import Form from "./components/Form";
import ComingSoon from "./components/ComingSoon";
// import ContactUs from "./components/ContactUs";
import Form from "./components/Form";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Mails from "./components/Mails";
import { Authadmin } from "./components/Mails";


const HomeApp = () => {
  return (
    <>
      <Hero />
      <Card />
      <Slider />
      <Form />
      {/* <ContactUs/> */}
    </>
  )
}


function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <Router>
      <HeaderTwo />
      <Routes>
        <Route path="/" element={<HomeApp />} />
        <Route path="/contact" element={<Form />} />
        <Route path="/services" element={<Services />} />
        <Route path="/mails-0xd0b404ed80db938a187f771b64a9098c984d4bec8767a967ee5a029b2f8f7d45" element={<Mails />} />
        <Route path="/mails-auth" element={<Authadmin />} />
        <Route path="*" element={<ComingSoon />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
