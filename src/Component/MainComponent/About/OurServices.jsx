import React from 'react'
import { BulbIcon, HouseIcon, KeyIcon } from '../../../Icons'

function OurServices() {
    return (
        <section className="flat-service tf-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="heading-section center">
                            <h2>Services we offer</h2>
                            <p className="text-1 text-color-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                                vel lobortis justo</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <div className="box">
                            <div className="icon">
                                <KeyIcon/>
                            </div>
                            <h3 className>Property Management</h3>
                            <p className="text-color-2">condimentum id. Nulla congue nunc vitae odio dictum, euismod mattis eros
                                dapibus</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <div className="box">
                            <div className="icon">
                               <HouseIcon/>
                            </div>
                            <h3 className>Consulting Service</h3>
                            <p className="text-color-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
                                faucibus pretium risus at commodo. </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <div className="box">
                            <div className="icon">
                                <BulbIcon/>
                            </div>
                            <h3 className>Buy and sell real estate</h3>
                            <p className="text-color-2">Nulla facilisi. Praesent vulputate mollis ante feugiat mattis.
                                Vestibulum felis nunc, faucibus ac varius eget, tempor</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurServices