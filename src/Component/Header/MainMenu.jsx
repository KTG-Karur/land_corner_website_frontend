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
                            <li><a href="#">Faq</a></li>
                            <li><a href="#">Latest News</a></li>
                            <li><a href="#">General Information</a></li>
                            <li><a href="#">EMI</a></li>
                            <li><a href="#">Land Area Calculation</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Bankauction</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default MainMenu