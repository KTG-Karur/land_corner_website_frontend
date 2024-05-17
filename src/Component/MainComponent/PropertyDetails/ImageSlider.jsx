import React from 'react'
import imageSlider1 from '../../../assets/assets/images/slider/slider-detail-1.jpg'
import imageSlider2 from '../../../assets/assets/images/slider/slider-detail-12.jpg'
import imageSlider3 from '../../../assets/assets/images/slider/slider-detail-13.jpg'
import imageSlider4 from '../../../assets/assets/images/slider/slider-detail-14.jpg'
import smallimageSlider1 from '../../../assets/assets/images/slider/slider-pagi-1.jpg'
import smallimageSlider2 from '../../../assets/assets/images/slider/slider-pagi-2.jpg'
import smallimageSlider3 from '../../../assets/assets/images/slider/slider-pagi-3.jpg'
import smallimageSlider4 from '../../../assets/assets/images/slider/slider-pagi-4.jpg'

function ImageSlider() {
    return (
        <section className="flat-slider01">
            <div className="container-full">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="swiper-container thumbs-swiper-column">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="image-detail">
                                        <img src={imageSlider1} alt="images" />
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="image-detail">
                                        <img src={imageSlider2} alt="images" />
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="image-detail">
                                        <img src={imageSlider3} alt="images" />
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="image-detail">
                                        <img src={imageSlider4} alt="images" />
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="image-detail">
                                        <img src={imageSlider1} alt="images" />
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="image-detail">
                                        <img src={imageSlider2} alt="images" />
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="image-detail">
                                        <img src={imageSlider3} alt="images" />
                                    </div>
                                </div>
                            </div>
                            <div className="button-custom-slider">
                                <div className="swiper-button-next5">
                                    <i className="far fa-chevron-down" />
                                </div>
                                <div className="swiper-button-prev5">
                                    <i className="far fa-chevron-up" />
                                </div>
                            </div>
                        </div>
                        <div thumbsslider className="swiper-container thumbs-swiper-column1 swiper-pagination5">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="image-detail">
                                        <img src={smallimageSlider1} alt="images" />
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="image-detail">
                                        <img src={smallimageSlider2} alt="images" />
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="image-detail">
                                        <img src={smallimageSlider3} alt="images" />
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="image-detail">
                                        <img src={smallimageSlider4} alt="images" />
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="image-detail">
                                        <img src={smallimageSlider1} alt="images" />
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="image-detail">
                                        <img src={smallimageSlider2} alt="images" />
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="image-detail">
                                        <img src={smallimageSlider3} alt="images" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ImageSlider