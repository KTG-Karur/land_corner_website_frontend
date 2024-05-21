import React from 'react'
import { Link } from "react-router-dom";

function MainMenu() {
    return (
        <nav className="main-menu show navbar-expand-md">
            <div className="navbar-collapse collapse clearfix" id="navbarSupportedContent">
                <ul className="navigation clearfix">
                    <li className="current"><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li className="dropdown2"><a href="#">Buy</a>
                        <ul>
                            <li className="dropdown2"><a href="#">Popular Choice</a>
                                <ul>
                                    <li><Link to="/Property">Ready to Move</Link></li>
                                    <li><Link to="/Property">New Projects</Link></li>
                                </ul>
                            </li>
                            <li className="dropdown2"><a href="#">Property type</a>
                                <ul>
                                    <li><Link to="/Property">Individual house</Link></li>
                                    <li><Link to="/Property">Apartment</Link></li>
                                    <li><Link to="/Property">Plot</Link></li>
                                    <li><Link to="/Property">Sites</Link></li>
                                    <li><Link to="/Property">Commercial</Link></li>
                                    <li><Link to="/Property">Agriculture</Link></li>
                                </ul>
                            </li>
                            <li className="dropdown2"><a href="#">Budget</a>
                                <ul>
                                    <li><Link to="/Property">Under &#8377; 50 Lac</Link></li>
                                    <li><Link to="/Property">&#8377; 50 Lac - &#8377; 1 Cr</Link></li>
                                    <li><Link to="/Property">&#8377; 1 Cr - &#8377; 2 Cr</Link></li>
                                    <li><Link to="/Property">Above &#8377; 2 Cr</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="dropdown2"><a href="#">Tools</a>
                        <ul>
                        <li><Link to="/Tools/Faq">Faq</Link></li>
                        <li><Link to="/Tools/Latestnews">Latest News</Link></li>
                        <li><Link to="/Tools/Generalinformation">General Information</Link></li>
                        <li><Link to="/Tools/Emi">EMI</Link></li>
                        <li><Link to="/Tools/Landareacalc">Land Area Calculation</Link></li>
                        <li><Link to="/LandAreaCalculation">Land Area Calculation</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/Property">Bankauction</Link></li>
                    <li><Link to="/Pricing">Pricing</Link></li>
                    <li><Link to="/ContactUs">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default MainMenu