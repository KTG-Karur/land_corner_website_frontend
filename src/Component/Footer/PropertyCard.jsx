import React from 'react'
import SellPropertyImage from '../../assets/assets/images/icon/footer-icon-2.png';
import { SellPropertyIcon } from '../../Icons';
import { Link } from 'react-router-dom';

function PropertyCard() {
    return (
        <div className="col-lg-6 col-md-12 col-12">
            <div className="group-icon">
                <div className="box-icons flex">
                    <div className="images">
                        <img src={SellPropertyImage} alt="images" />
                    </div>
                    <div className="content">
                        <div className="title-icon fs-30 lh-45 fw-7 text-color-2">Sell your house</div>
                        <p className="font-2 text-color-2">We will connect you to thousands of people who need to buy a home.</p>
                    </div>
                </div>
                <div className="button-footer center">
                    <Link className="sc-button" to="/PostProperty">
                        <SellPropertyIcon/>
                        <span>Sell Property</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PropertyCard