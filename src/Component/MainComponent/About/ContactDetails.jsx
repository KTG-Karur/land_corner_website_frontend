import React from 'react'
import { CallBackIcon, MailSendIcon, MapIcon } from '../../../Icons'

function ContactDetails() {
    return (
        <section className="flat-search-home page">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="heading-section center">
                            <h2 className="fw-8 font-2 lh-56">We provide the most suitable and quality real estate.</h2>
                            <p className>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed tristique metus
                                proin id lorem odio</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <div className="box-icon flex align-center">
                            <div className="icon relative flex-none">
                                <MapIcon/>
                            </div>
                            <div className="content">
                                <p className="text-1 fw-6">Office address</p>
                                <div className="fs-16 lh-24"> 311, Jawahar Bazaar, Karur, Tamil Nadu 639001</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <div className="box-icon flex align-center">
                            <div className="icon relative flex-none">
                                <CallBackIcon/>
                            </div>
                            <div className="content">
                                <p className="fw-6">Request a call back</p>
                                <a href="#">
                                    <div className="fs-30 fw-7">9876543210</div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <div className="box-icon flex align-center">
                            <div className="icon relative flex-none">
                                <MailSendIcon/>
                            </div>
                            <div className="content">
                                <p className="text-3  fw-6">Email us</p>
                                <a href="#">
                                    <div className="fs-16">ktgtoffice@gmail.com
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactDetails