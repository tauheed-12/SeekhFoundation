import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import './App.css'
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/aboutUs" element={<AboutUs />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
