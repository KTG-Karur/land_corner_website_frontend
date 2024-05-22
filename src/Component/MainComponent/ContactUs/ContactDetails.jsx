import React from 'react'
import { ContactUsCallBackIcon, ContactUsMailSendIcon } from '../../../Icons'
import ContactUsImage from '../../../assets/assets/images/mark/contact_img.png'

function ContactDetails() {
    return (
        <section className="flat-contact  page-contact relative">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-7">
                        <div className="heading-section">
                            <h2 className="font-2 fw-8 ">We provide the most suitable and quality real estate.</h2>
                            <p className="text-color-">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed
                                tristique metus proin id lorem odio</p>
                        </div>
                        <div className="wrap-info">
                            <div className="box-info flex align-center">
                                <div className="content">
                                    <h5 className="text-color-4">Office address</h5>
                                    <h4 className="fw-4 text-color-"> 311, Jawahar Bazaar, Karur, Tamil Nadu 639001</h4>
                                </div>
                            </div>
                            <div className="box-info flex align-center">
                                <div className="icon-info">
                                    <ContactUsCallBackIcon />
                                </div>
                                <div className="content">
                                    <h5 className="text-color-4">Request a call back</h5>
                                    <a href="tel:0123456789">
                                        <h4 className="fw-8 font-2 fs-30 text-color-3 lh-37">9876543210</h4>
                                    </a>
                                </div>
                            </div>
                            <div className="box-info flex align-center">
                                <div className="icon-info">
                                    <ContactUsMailSendIcon />
                                </div>
                                <div className="content">
                                    <h5 className="text-color-4">Email us</h5>
                                    <a href="info:hellosupport@gmail.com">
                                        <h4 className="fw-4 text-color-3"><span className="__cf_email__" data-cfemail="d9b1bcb5b5b6aaaca9a9b6abad99beb4b8b0b5f7bab6b4">ktgtoffice@gmail.com</span>
                                        </h4>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-5">
                        <div className="images z-2 relative">
                            <img src={ContactUsImage} alt="images" style={{ marginTop: 40 }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactDetails