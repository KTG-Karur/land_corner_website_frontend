import React from 'react'
import PricingList from './PricingList'

function index() {
    return (
        <div id="pagee" className="clearfix">
            <section className="flat-pricing page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="heading-section center">
                                <h2 className>Subscription for Landconer</h2>
                                <p className="text-color-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lobortis justo
                                </p>
                            </div>
                        </div>
                        <PricingList/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default index