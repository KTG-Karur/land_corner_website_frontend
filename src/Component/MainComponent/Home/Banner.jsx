import React from 'react'
import HomeFilter from './Filter'

function Banner() {
    return (
        <section className="slider home2">
            <div className="slider-item">
                <div className="container  relative">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="content po-content-two" style={{ padding: "190px 0 40px"}}>
                                <HomeFilter />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner