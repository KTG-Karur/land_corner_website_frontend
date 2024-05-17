import React from 'react'
import SideImage from '../Card/SideImage'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import CardDetails from '../Card/CardDetails';
import CardAuthor from '../Card/CardAuthor';
function index({colNo}) {
    return (
        <OwlCarousel className='three-carousel owl-carousel owl-theme' loop margin={10} nav items={colNo}>
            <div className="slide-item">
                <div className="box box-dream hv-one">
                    <div className="image-group relative ">
                        <SideImage />
                    </div>
                    <div className="content">
                        <CardDetails />
                        <CardAuthor />
                    </div>
                </div>
            </div>
        </OwlCarousel>
    )
}

export default index