import React from 'react'
import PostPropertyFooter from './PostPropertyFooter'
import PostPropertyFormLayout from './PostPropertyFormLayout';

function index() {
    
    return (
        <div id="pagee" className="clearfix">
            {/* Wizard */}
            <section className="flat-agencies-detail wg-tabs" style={{ marginTop: 30, padding: 0 }}>
                <div className="container">
                    <h2 className="titles title-2" style={{ marginTop: 30, marginBottom: 30, fontSize: 30 }}>Post Property</h2>
                    <div className="flat-tabs">
                        <div className="box-tab d-flex justify-content-center">
                            <ul className="menu-tab tab-title flex ">
                                <li className="item-title active">
                                    <h3 className="inner">Your Property</h3>
                                </li>
                                <li className="item-title style">
                                    <h3 className="inner">Bank Auction</h3>
                                </li>
                            </ul>
                        </div>
                        <div className="content-tab">
                            <div className="content-inner tab-content wg-dream">
                                {/* Post Wizard */}
                                <PostPropertyFormLayout />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <PostPropertyFooter />
        </div>
    )
}

export default index