import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import './App.css'
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import Projects from "./Pages/Projects";
import GetInvolved from "./Pages/GetInvolved";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/aboutUs" element={<AboutUs />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/getInvolve" element={<GetInvolved />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
