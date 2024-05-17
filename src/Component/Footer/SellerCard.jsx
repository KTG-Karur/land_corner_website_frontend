import React from 'react'
import ContactSellerImage from '../../assets/assets/images/icon/footer-icon-1.png';
import { ContactIcon } from '../../Icons';
function SellerCard() {
    return (
        <div className="col-lg-6 col-md-12 col-12">
            <div className="group-icon">
                <div className="box-icons flex">
                    <div className="images">
                        <img src={ContactSellerImage} alt="images" />
                    </div>
                    <div className="content">
                        <div className="title-icon fs-30 lh-45 fw-7 text-color-2">You need a house</div>
                        <p className="font-2 text-color-2">Tell us your needs, we will give you thousands of suggestions for the dream home.</p>
                    </div>
                </div>
                <div className="button-footer center">
                    <a className="sc-button" href="contact.html">
                        <ContactIcon/>
                        <span>Contact Seller</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SellerCard