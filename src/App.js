import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import './App.css'
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import Projects from "./Pages/Projects";
import GetInvolved from "./Pages/GetInvolved";
import Gallery from "./Pages/Gallery";

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
