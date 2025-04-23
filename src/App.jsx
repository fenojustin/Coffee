import React from "react"
import { BrowserRouter as Router, Routes, Route, Form } from 'react-router-dom';
import Home from './Home/Home';
import Layout from './Layout/Layout';
import Footer from './Footer/Footer'
import AOS from "aos";
import "aos/dist/aos.css";
import Delivery from "./Delivery/Delivery";
import AboutUs from "./About/AboutUs";
function App() {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <Router>
      <Layout>
        <Home />
        <Delivery />
        <AboutUs />
        <Footer/>
      </Layout>
    </Router>
  );
}

export default App;
