import React, { useState,useEffect } from 'react';
import LogoBox from './LogoBox';
import LoginRegister from './LoginRegister';
import MainMenu from './MainMenu';
import MobileMenu from './MobileMenu';

function Index() {
  const [isShow, setIsShow] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  useEffect(() => {
    if (isMenuVisible) {
      document.body.classList.add('mobile-menu-visible');
    } else {
      document.body.classList.remove('mobile-menu-visible');
    }
  }, [isMenuVisible]);

  function handleMenuOpen() {
    setIsShow(!isShow);
    setIsMenuVisible(prevState => !prevState);
  }

  function handleMenuClose() {
    setIsShow(false);
    setIsMenuVisible(false);
  }

  return (
    <>
      {/* Main Header */}
      <header id="header" className="main-header header header-fixed ">
        {/* Header Lower */}
        <div className="header-lower">
          <div className="container6">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner-container flex justify-space align-center">
                  {/* Logo Box */}
                  <LogoBox />
                  <div className="nav-outer flex align-center">
                    {/* Main Menu */}
                    <MainMenu />
                    {/* Main Menu End*/}
                  </div>
                  <div className="header-account flex align-center">
                    <LoginRegister />
                  </div>
                  <div className="mobile-nav-toggler mobile-button" onClick={handleMenuOpen}><span /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Header Lower */}
        {/* Mobile Menu  */}
        <div className="close-btn" onClick={handleMenuClose}><span className="icon flaticon-cancel-1" /></div>
        <MobileMenu isShow={isShow} />
        {/* End Mobile Menu */}
      </header>
      {/* End Main Header */}
    </>
  )
}

export default Index
