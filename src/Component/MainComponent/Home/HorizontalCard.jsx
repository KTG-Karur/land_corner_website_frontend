import React from 'react';
import HorizontalCardDetails from './HorizontalCardDetails';
function HorizontalCard({ title, shortDesp, filter, colNo }) {
    return (
        <section className="flat-featured wg-dream home2 tf-section" style={{ margin: '40px 0 0 0', padding: "30px" }}>
            <div className="container5">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="heading-section center">
                            <h2>{title}</h2>
                            <p className="text-color-4">{shortDesp}</p>
                        </div>
                    </div>
                    <div className="col-lg-12 wrap-tabs">
                        <div className="flat-tabs themesflat-tabs">
                            {filter ? (
                                <div className="box-tab center">
                                    <ul className="menu-tab tab-title flex justify-center">
                                        <li className="item-title active hv-tool">
                                            <h5 className="inner">Individual</h5>
                                        </li>
                                        <li className="item-title hv-tool">
                                            <h5 className="inner">Plot</h5>
                                        </li>
                                        <li className="item-title hv-tool">
                                            <h5 className="inner">Apartments</h5>
                                        </li>
                                        <li className="item-title hv-tool">
                                            <h5 className="inner"> Agriculture </h5>
                                        </li>
                                        <li className="item-title hv-tool">
                                            <h5 className="inner">Sites</h5>
                                        </li>
                                        <li className="item-title hv-tool">
                                            <h5 className="inner"> Commercial </h5>
                                        </li>
                                    </ul>
                                </div>) : ''}
                            <div className="content-tab">
                                <div className="content-inner tab-content">
                                    <div className="swiper-container2">
                                        <HorizontalCardDetails colNo={colNo}/>
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

export default HorizontalCard
