import { Route, Routes } from "react-router-dom";

import './App.css'

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUsPage";
import Projects from "./Pages/OurWorksPage";
import GetInvolved from "./Pages/GetInvolvedPage";
import Gallery from "./Pages/GalleryPage";

function App() {
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
  );
}

export default App;
