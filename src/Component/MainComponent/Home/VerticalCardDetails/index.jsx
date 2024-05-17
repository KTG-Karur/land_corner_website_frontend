import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import SideImage from "../Card/SideImage";
import CardDetails from "../Card/CardDetails";
import CardAuthor from "../Card/CardAuthor";
function index() {
    return (
        <OwlCarousel className="four-carousel owl-carousel owl-theme" loop margin={10} nav items={2}>
            <div className="slide-item">
                <div className="box box-dream flex hv-one">
                    <div className="image-group relative">
                        <div className="swiper-container noo carousel-2 img-style" data-chat="person1">
                            <SideImage />
                        </div>
                    </div>
                    <div className="content">
                        <CardDetails />
                        <CardAuthor />
                    </div>
                </div>
            </div>
        </OwlCarousel>
    );
}

export default index;
