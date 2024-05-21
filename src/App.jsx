import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Header from './Component/Header';
import Footer from './Component/Footer';
import Home from './Component/MainComponent/Home'
import About from './Component/MainComponent/About'
import Property from './Component/MainComponent/Property'
import PropertyDetails from './Component/MainComponent/PropertyDetails'
import Pricing from './Component/MainComponent/Pricing'
import ContactUs from './Component/MainComponent/ContactUs'
import PostProperty from './Component/MainComponent/PostProperty'
import Faq from "./Component/MainComponent/ToolPages/Faq";
import LatestNews from "./Component/MainComponent/ToolPages/LatestNews";
import LatestNewsDetails from "./Component/MainComponent/ToolPages/LatestNews/LatestNewsDetails";
import GendralInformation from "./Component/MainComponent/ToolPages/GendralInformation";
import EMI from "./Component/MainComponent/ToolPages/Emi";
import LandAreaCalculation from './Component/MainComponent/LandAreaCalculation'
function App() {
  return (
    <>
      <div className="preload preload-container">
        <div className="boxes ">
          <div className="box">
            <div /> <div /> <div /> <div />
          </div>
          <div className="box">
            <div /> <div /> <div /> <div />
          </div>
          <div className="box">
            <div /> <div /> <div /> <div />
          </div>
          <div className="box">
            <div /> <div /> <div /> <div />
          </div>
        </div>
      </div>
      <div id="wrapper">
        <div id="pagee" className="clearfix"></div>
        <BrowserRouter>
          {/* Header */}
          <Header />
          {/* Header */}
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/About' element={<About />}></Route>
            <Route path='/Property' element={<Property />}></Route>
            <Route path='/PropertyDetails' element={<PropertyDetails />}></Route>
            <Route path='/Pricing' element={<Pricing />}></Route>
            <Route path='/ContactUs' element={<ContactUs />}></Route>
            <Route path='/PostProperty' element={<PostProperty />}></Route>
            <Route path="/Tools/Faq" element={<Faq />}></Route>
            <Route path="/Tools/Latestnews" element={<LatestNews />}></Route>
            <Route path="/Tools/Generalinformation" element={<GendralInformation />}></Route>
            <Route path="/Tools/Emi" element={<EMI />}></Route>
            <Route path="/Tools/Landareacalc" element={<LandAreaCalculator />}></Route>
            <Route path="/Tools/LatestNews/NewsDetails" element={<LatestNewsDetails />}></Route>
            <Route path='/LandAreaCalculation' element={<LandAreaCalculation />}></Route>
          </Routes>
          {/* Footer */}
          <Footer />
          {/* /#footer */}
        </BrowserRouter>
      </div>
      {/*page*/}
    </>
  );
}

export default App;
