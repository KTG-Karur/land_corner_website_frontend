import React from 'react'
import PropertyFilter from './PropertyFilter'
import PropertyList from './PropertyList'

function index() {
    return (
        <div id="wrapper">
            <PropertyFilter />
            <section className="flat-property flat-property-list2 flat-properties-rent tf-section2 wg-dream">
                <div className="container">
                    <div className="row flex">
                        <div className="col-lg-12">
                            <div className="posts">
                                <div className="category-filter flex justify-space">
                                    <div className="box-1 flex align-center">
                                        <div className="heading-listing fs-30 lh-45 fw-7">
                                            Property Listing
                                        </div>
                                        <div className>
                                            There are currently 164,814 properties.
                                        </div>
                                    </div>
                                    <div className="box-2 flex">
                                        <div className="wd-find-select flex">
                                            <div className="group-select">
                                                <div className="nice-select" tabIndex={0}>
                                                    <span className="current">Show: 50</span>
                                                    <ul className="list style">
                                                        <li data-value={10} className="option">Show: 10</li>
                                                        <li data-value={30} className="option">Show: 30</li>
                                                        <li data-value={50} className="option selected">
                                                            Show: 50
                                                        </li>
                                                        <li data-value={100} className="option">Show: 100</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="group-select">
                                                <div className="nice-select" tabIndex={0}>
                                                    <span className="current">All</span>
                                                    <ul className="list style">
                                                        <li data-value="by-latest" className="option">All</li>
                                                        <li data-value="low-to-high" className="option">
                                                            Low to high
                                                        </li>
                                                        <li data-value="high-to-low" className="option">
                                                            High to low
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Property List */}
                                <div className="wrap-list">
                                    <PropertyList/>
                                    <div className="themesflat-pagination clearfix center">
                                        <ul>
                                            <li>
                                                <a href="#" className="page-numbers style"><i className="far fa-angle-left" /></a>
                                            </li>
                                            <li><a href="#" className="page-numbers">1</a></li>
                                            <li><a href="#" className="page-numbers">2</a></li>
                                            <li><a href="#" className="page-numbers current">3</a></li>
                                            <li><a href="#" className="page-numbers">4</a></li>
                                            <li><a href="#" className="page-numbers">...</a></li>
                                            <li>
                                                <a href="#" className="page-numbers style"><i className="far fa-angle-right" /></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default index