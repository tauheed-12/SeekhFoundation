import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import { useEffect } from "react";

import "aos/dist/aos.css";
import './App.css'

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUsPage";
import Projects from "./Pages/OurWorksPage";
import GetInvolved from "./Pages/GetInvolvedPage";
import Gallery from "./Pages/GalleryPage";
import Test from "./Test";


function App() {

  useEffect(() => {
    AOS.init({
      once: true,
      // disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);


  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/getInvolved" element={<GetInvolved />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
      </Routes>
      <Footer />
    </div>
    // <div>
    // <Test/>
    // </div>
  );
}

export default App;
