import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faBath, faChartArea } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom/dist';

function CardDetails() {
    return (
        <>
            <h3 className="link-style-1"><Link to='/PropertyDetails'>Gorgeous Apartment Building</Link> </h3>
            <div className="text-address"><p className="p-12">58 Hullbrook Road, Billesley, B13 0LA</p></div>
            <div className="money fs-18 fw-6 text-color-3"><a href="#">$7,500</a></div>
            <div className="icon-box flex">
                <div className="icons flex text-color-4" style={{marginRight: '5px'}}><span><FontAwesomeIcon icon={faBed} /> Beds: </span><span className="fw-6" style={{marginRight: "5px"}}>4</span></div>
                <div className="icons flex text-color-4" style={{marginRight: '5px'}}><span><FontAwesomeIcon icon={faBath} /> Baths: </span><span className="fw-6" style={{marginRight: "5px"}}>2</span></div>
                <div className="icons flex text-color-4" style={{marginRight: '5px'}}><span><FontAwesomeIcon icon={faChartArea} /> Sqft: </span><span className="fw-6" style={{marginRight: "5px"}}>1150</span></div>
            </div>
        </>
    );
}

export default CardDetails;
