import React from 'react'
import VerticalCardDetails from './VerticalCardDetails'
function VerticalCard({ title, shortDesp}) {
    return (
        <section className="tf-section flat-properties-rent wg-dream bg-1 home2 dots-style2" style={{ margin: '40px 0 0 0', padding: "30px" }}>
            <div className="container4">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="heading-section center">
                            <h2 style={{ margin: 0 }}>{title}</h2>
                            <p className="text-color-4">
                                {shortDesp}
                            </p>
                        </div>
                        <div className="swiper-container">
                            <VerticalCardDetails/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VerticalCard