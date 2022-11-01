import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import MissingPage from './pages/MissingPage';
import Header from "./components/TopNavBar";
import Footer from "./components/Footer";
import Tickets from "./components/Tickets";
import LogIn from "./components/LogIn";
function App() {
  return (
      <div> 
        <Home></Home>
      <BrowserRouter>
            <Header></Header>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Tickets" element={<Tickets />} />
                    <Route path="/LogIn" element={<LogIn />} />
                    <Route path="/*" element={<MissingPage />} /> 
                </Routes> 
            <Footer></Footer>
      </BrowserRouter>
      
      </div>
  );
  
}

export default App;