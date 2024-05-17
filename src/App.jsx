import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Header from './Component/Header';
import Footer from './Component/Footer';
import Home from './Component/MainComponent/Home'
import About from './Component/MainComponent/About'
import Property from './Component/MainComponent/Property'
import PropertyDetails from './Component/MainComponent/PropertyDetails'
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
        <BrowserRouter >
          {/* Header */}
          <Header />
          {/* Header */}
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/About' element={<About />}></Route>
            <Route path='/Property' element={<Property />}></Route>
            <Route path='/PropertyDetails' element={<PropertyDetails />}></Route>
          </Routes>
          {/* Footer */}
          <Footer />
          {/* /#footer */}
        </BrowserRouter>
      </div>
      {/*page*/}
    </>
  )
}

export default App
