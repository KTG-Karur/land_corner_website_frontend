import React from 'react';
import image1 from '../../../../assets/assets/images/house/featured-16.jpg';
import image2 from '../../../../assets/assets/images/house/featured-2.jpg';
import image3 from '../../../../assets/assets/images/house/featured-3.jpg';
import image4 from '../../../../assets/assets/images/house/featured-4.jpg';
import image5 from '../../../../assets/assets/images/house/featured-5.jpg';

function SideImage() {
  return (
    <div className="image-group relative">
      <div className="swiper-container noo carousel-2 img-style swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
        <div className="swiper-wrapper" id="swiper-wrapper-3d6dd52a8d7e25d6" aria-live="polite" style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
          <div className="swiper-slide swiper-slide-active" role="group" aria-label="1 / 5" style={{ width: 273 }}>
            <img src={image1} alt="images" />
          </div>
          <div className="swiper-slide swiper-slide-next" role="group" aria-label="2 / 5" style={{ width: 273 }}>
            <img src={image2} alt="images" />
          </div>
          <div className="swiper-slide" role="group" aria-label="3 / 5" style={{ width: 273 }}>
            <img src={image3} alt="images" />
          </div>
          <div className="swiper-slide" role="group" aria-label="4 / 5" style={{ width: 273 }}>
            <img src={image4} alt="images" />
          </div>
          <div className="swiper-slide" role="group" aria-label="5 / 5" style={{ width: 273 }}>
            <img src={image5} alt="images" />
          </div>
        </div>
        <div className="pagi2">
          <div className="swiper-pagination2 swiper-pagination-clickable swiper-pagination-bullets"><span className="swiper-pagination-bullet swiper-pagination-bullet-active" tabIndex={0} role="button" aria-label="Go to slide 1" /><span className="swiper-pagination-bullet" tabIndex={0} role="button" aria-label="Go to slide 2" /><span className="swiper-pagination-bullet" tabIndex={0} role="button" aria-label="Go to slide 3" /><span className="swiper-pagination-bullet" tabIndex={0} role="button" aria-label="Go to slide 4" /><span className="swiper-pagination-bullet" tabIndex={0} role="button" aria-label="Go to slide 5" /></div>
        </div>
        <div className="swiper-button-next2" tabIndex={0} role="button" aria-label="Next slide" aria-controls="swiper-wrapper-3d6dd52a8d7e25d6" aria-disabled="false">
          <i className="fal fa-arrow-right" />
        </div>
        <div className="swiper-button-prev2 swiper-button-disabled" tabIndex={-1} role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-3d6dd52a8d7e25d6" aria-disabled="true">
          <i className="fal fa-arrow-left" />
        </div>
        <span className="swiper-notification" aria-live="assertive" aria-atomic="true" /></div>
    </div>
  );
}

export default SideImage;
