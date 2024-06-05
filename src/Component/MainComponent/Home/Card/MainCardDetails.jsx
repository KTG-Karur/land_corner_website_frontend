import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faBath, faChartArea } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom/dist';

function MainCardDetails() {
    return (
        <>
            <h3 className="link-style-1">
                <Link to='/PropertyDetails'>Gorgeous Apartment Building</Link>
            </h3>
            <div className="text-address">
                <p className="p-12">
                    53, north street ,karur
                </p>
            </div>
            <div className="money fs-20 fw-8 font-2 text-color-3">
                <Link to="/PropertyDetails">$7,500</Link>
            </div>
            <div className="icon-box">
                <div className=" icons flex">
                    <span className="fw-6">Individual House</span>
                </div>
                <div className="icons flex text-color-4" style={{ marginRight: '10px' }}><span><FontAwesomeIcon icon={faBed} /> Beds: </span><span className="fw-6" style={{ marginRight: "10px" }}>4</span></div>
                <div className="icons flex text-color-4" style={{ marginRight: '10px' }}><span><FontAwesomeIcon icon={faBath} /> Baths: </span><span className="fw-6" style={{ marginRight: "10px" }}>2</span></div>
                <div className="icons flex text-color-4" style={{ marginRight: '10px' }}><span><FontAwesomeIcon icon={faChartArea} /> Sqft: </span><span className="fw-6" style={{ marginRight: "10px" }}>1150</span></div>
            </div>
        </>
    )
}

export default MainCardDetails