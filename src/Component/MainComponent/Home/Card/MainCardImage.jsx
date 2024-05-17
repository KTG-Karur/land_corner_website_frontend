import React from 'react'
import ListingImage1 from '../../../../assets/assets/images/house/property-listing-1.jpg'
import ListingImage2 from '../../../../assets/assets/images/house/property-listing-2.jpg'
import ListingImage3 from '../../../../assets/assets/images/house/property-listing-3.jpg'
import ListingImage4 from '../../../../assets/assets/images/house/property-listing-4.jpg'
import ListingImage5 from '../../../../assets/assets/images/house/property-listing-5.jpg'
import { ImageIcon } from '../../../../Icons'

function MainCardImage() {
    return (
        <div className="image-group relative flex">
            <div className="img-box img-box1 flex-none relative">
                <img src={ListingImage1} alt="images" />
            </div>
            <div className="img-box img-box2">
                <img className="img-2" src={ListingImage2} alt="images" />
                <img src={ListingImage3} alt="images" />
            </div>
            <div className="img-box img-box3">
                <img className="img-3" src={ListingImage4} alt="images" />
                <div className="icon-inner center relative">
                    <div className="imgs">
                        <img src={ListingImage5} alt="images" />
                    </div>
                    <div className="contents z-2" onclick="openModal();currentSlide(1)">
                        <ImageIcon />
                        <div className="fw-6 text-color-1">
                            <a href="#">12 images</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainCardImage