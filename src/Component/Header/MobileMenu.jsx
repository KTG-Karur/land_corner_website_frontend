import React, { useState } from 'react'
import logoImage from '../../assets/assets/images/logo/landcornor.jpg';
import { ContactUsCallBackIcon, ContactUsMailSendIcon, LoginIcon, SellPropertyIcon } from '../../Icons';
import { Link } from "react-router-dom";

function MobileMenu({ isShow }) {
    const [openDropdown, setOpenDropdown] = useState(null);

    const handleDropdownClick = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };
    const [openInnerDropdown, setOpenInnerDropdown] = useState(null);

    const handleInnerDropdownClick = (index) => {
        setOpenInnerDropdown(openInnerDropdown === index ? null : index);
    };
    return (
        <>
            <div className="mobile-menu" style={{ visibility: isShow ? 'visible' : 'hidden' }}>
                <div className="menu-backdrop" />
                <nav className="menu-box">
                    <div className="nav-logo"><a href="index.html"><img src={logoImage} alt width={197} height={48} /></a></div>
                    <div className="bottom-canvas">
                        <div className="login-box flex align-center">
                            <LoginIcon/>
                            <a href="#" data-toggle="modal" data-target="#popup_bid" className="fw-7 font-2">Login</a>
                        </div>
                        <div className="menu-outer">
                            <div className="navbar-collapse collapse clearfix" id="navbarSupportedContent">
                                <ul className="navigation clearfix">
                                    <li className="current"><Link to="/">Home</Link></li>
                                    <li><Link to="/About">About</Link></li>
                                    <li className="dropdown2"><a href="#">Buy</a>
                                        <ul style={{ display: openDropdown === 0 ? 'block' : 'none' }}>
                                            <li className="dropdown2"><a href="#">Popular Choice</a>
                                                <ul style={{ display: openInnerDropdown === 0 ? 'block' : 'none' }}>
                                                    <li><Link to="/Property">Ready to Move</Link></li>
                                                    <li><Link to="/Property">New Projects</Link></li>
                                                </ul>
                                                <div className="dropdown2-btn" onClick={() => handleInnerDropdownClick(0)} />
                                            </li>
                                            <li className="dropdown2"><a href="#">Property type</a>
                                                <ul style={{ display: openInnerDropdown === 1 ? 'block' : 'none' }}>
                                                    <li><Link to="/Property">Individual house</Link></li>
                                                    <li><Link to="/Property">Apartment</Link></li>
                                                    <li><Link to="/Property">Plot</Link></li>
                                                    <li><Link to="/Property">Sites</Link></li>
                                                    <li><Link to="/Property">Commercial</Link></li>
                                                    <li><Link to="/Property">Agriculture</Link></li>
                                                </ul>
                                                <div className="dropdown2-btn" onClick={() => handleInnerDropdownClick(1)} />
                                            </li>
                                            <li className="dropdown2"><a href="#">Budget</a>
                                                <ul style={{ display: openInnerDropdown === 2 ? 'block' : 'none' }}>
                                                    <li><Link to="/Property">Under &#8377; 50 Lac</Link></li>
                                                    <li><Link to="/Property">&#8377; 50 Lac - &#8377; 1 Cr</Link></li>
                                                    <li><Link to="/Property">&#8377; 1 Cr - &#8377; 2 Cr</Link></li>
                                                    <li><Link to="/Property">Above &#8377; 2 Cr</Link></li>
                                                </ul>
                                            </li>
                                            <div className="dropdown2-btn" onClick={() => handleInnerDropdownClick(2)} />
                                        </ul>
                                        <div className="dropdown2-btn" onClick={() => handleDropdownClick(0)} />
                                    </li>
                                    <li className="dropdown2"><a href="#">Tools</a>
                                        <ul style={{ display: openDropdown === 1 ? 'block' : 'none' }}>
                                            <li><a href="#">Faq</a></li>
                                            <li><a href="#">Latest News</a></li>
                                            <li><a href="#">General Information</a></li>
                                            <li><a href="#">EMI</a></li>
                                            <li><Link to="/LandAreaCalculation">Land Area Calculation</Link></li>
                                        </ul>
                                        <div className="dropdown2-btn" onClick={() => handleDropdownClick(1)} />
                                    </li>
                                    <li><Link to="/Property">Bankauction</Link></li>
                                    <li><Link to="/Pricing">Pricing</Link></li>
                                    <li><Link to="/ContactUs">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="button-mobi-sell">
                            <Link className="sc-button btn-icon center" to="/PostProperty">
                                <SellPropertyIcon/>
                                <span>Sell Property</span>
                            </Link>
                        </div>
                        <div className="mobi-icon-box">
                            <h3>Contact</h3>
                            <div className="box flex">
                                <div className="icon">
                                    <ContactUsCallBackIcon/>
                                </div>
                                <div className="content fs-13">
                                    Call us: <h5>+91 9876543214</h5>
                                </div>
                            </div>
                            <div className="box flex">
                                <div className="icon">
                                <ContactUsMailSendIcon/>
                                </div>
                                <div className="content fs-13 lh-16">
                                    Email: <h5>Nammasothu@gmail.com</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default MobileMenu