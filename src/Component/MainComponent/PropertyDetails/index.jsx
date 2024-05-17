import React from 'react'
import ImageSlider from './ImageSlider'
import { HeartinIcon } from '../../../Icons'
import OverView from './OverView'
import Featured from './Featured'
import HorizontalCardDetails from '../Home/HorizontalCardDetails'
function index() {
    return (
        <div>
            <ImageSlider />
            {/* Title */}
            <section className="flat-property-detail style2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="wrap-house wg-dream flex bg-white">
                                <div className="box-1">
                                    <div className="title-heading fs-30 fw-7 lh-45">
                                        Villa Belo a large superior luxury villa
                                    </div>
                                    <div className="inner flex">
                                        <div className="text-address">
                                            <p>53, west street karur</p>
                                        </div>
                                        <div className="icon-inner flex">
                                            <div className="years-icon flex align-center">
                                                <i className="fal fa-calendar" />
                                                <p className="text-color-2">14/03/2024</p>
                                            </div>
                                            <div className="view-icon flex align-center">
                                                <i className="far fa-eye" />
                                                <p className="text-color-2">4.529 Views</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="box-2 text-end" style={{ display: 'flex', flexDirection: 'column', alignItems: 'end' }}>
                                    <div className="icon-boxs">
                                        <a href="#">
                                            <HeartinIcon />
                                        </a>
                                    </div>
                                    <div className="moneys fs-30 fw-7 lh-45 text-color-3">
                                        $7,500
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="post">
                                <OverView />
                                <div className="wrap-text wrap-style">
                                    <h3 className="titles">Property description</h3>
                                    <p className="text-1 text-color-2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Aliquam risus leo, blandit vitae diam a, vestibulum
                                        viverra nisi. Vestibulum ullamcorper velit eget mattis
                                        aliquam. Proin dapibus luctus pulvinar. Integer et libero
                                        ut purus bibendum gravida non ac tellus. Proin sed tellus
                                        porttitor, varius mauris vitae, tincidunt augue. Sed
                                        consectetur magna elit, sit amet faucibus tortor sodales
                                        vitae. Maecenas quis arcu est. Nam sit amet neque
                                        vestibulum, fringilla elit sit amet, volutpat nunc.
                                    </p>
                                    <p className="text-2 text-color-2">
                                        Aliquam non lorem consequat, luctus dui et, auctor nisi.
                                        Aenean placerat sapien at augue lacinia, non semper urna
                                        tempor. Mauris sit amet elit orci.
                                    </p>
                                </div>
                                <div className="wrap-property wrap-style">
                                    <h3 className="titles">Property details</h3>
                                    <div className="box flex">
                                        <ul>
                                            <li className="flex">
                                                <span className="one fw-6">Manai no</span><span className="two">#1234</span>
                                            </li>
                                            <li className="flex">
                                                <span className="one fw-6">Facing</span><span className="two">North</span>
                                            </li>
                                            <li className="flex">
                                                <span className="one fw-6">RERA ID</span><span className="two">150</span>
                                            </li>
                                            <li className="flex">
                                                <span className="one fw-6">DTCP</span><span className="two">Yes</span>
                                            </li>
                                            <li className="flex">
                                                <span className="one fw-6">Gated Comminity</span><span className="two">Yes</span>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li className="flex">
                                                <span className="one fw-6">No of Wells</span><span className="two">No</span>
                                            </li>
                                            <li className="flex">
                                                <span className="one fw-6">Soil type</span><span className="two">Red Soil</span>
                                            </li>
                                            <li className="flex">
                                                <span className="one fw-6">EB Service</span><span className="two">Yes</span>
                                            </li>
                                            <li className="flex">
                                                <span className="one fw-6">North side</span><span className="two">--</span>
                                            </li>
                                            <li className="flex">
                                                <span className="one fw-6">Furnished Status</span><span className="two">Fully</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <Featured />
                                <div style={{ marginBottom: 20 }}>
                                    <h3 style={{ margin: '10px 0' }}>Contact Dealer</h3>
                                    <button className="sc-button btn-icon " id="view_name_number" style={{ border: 'none' }} data-toggle="modal" data-target="#popup_register">
                                        <span>View name &amp; Number</span>
                                    </button>
                                    <div id="dealer" style={{ display: 'none' }}>
                                        <h6>Ramkumar Ramanadhan</h6>
                                        <p style={{ fontWeigth: 600, fontSize: 16 }}>8973746385</p>
                                        <p style={{ fontWeigth: 600, fontSize: 16 }}>9487732543</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flat-sale-detail flat-sale wg-dream wg-dots tf-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="heading-section">
                                <div className="title-heading fs-30 lh-45 fw-7">
                                    Featured properties
                                </div>
                                <p className="text-color-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Integer vel lobortis justo
                                </p>
                            </div>
                            <div className="swiper-container2">
                                <HorizontalCardDetails colNo={3}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default index