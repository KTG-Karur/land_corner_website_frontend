import React from 'react'
import { Link } from "react-router-dom";

function FooterMenu() {
    return (
        <div className="col-lg-3 col-md-6 col-12">
            <div className="widget widget-menu style-3 ">
                <h3>Our Company</h3>
                <ul className="box-menu">
                    <li><Link to="/About">About Us</Link></li>
                    <li><a href="#">EMI</a></li>
                    <li><a href="#">Land Area Calculation</a></li>
                    <li><a href="#">General Information</a></li>
                    <li><a href="#">Latest news</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><Link to="/ContactUs">Contact Us</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default FooterMenu