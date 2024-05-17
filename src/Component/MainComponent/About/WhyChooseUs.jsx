import React from 'react'
import { GreatSupportIcon, LeftArrowIcon, PostsEveryDayIcon, SmartFilterIcon } from '../../../Icons'
import WhyChoose1 from '../../../assets/assets/images/img-box/why-choose-1.jpg'
import WhyChoose2 from '../../../assets/assets/images/img-box/why-choose-2.jpg'
import WhyChoose3 from '../../../assets/assets/images/img-box/why-choose-3.jpg'
function WhyChooseUs() {
    return (
        <section className="flat-why-choose page" style={{ paddingTop: 50 }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="heading-section center">
                            <h2>Why choose us</h2>
                            <p className="text-color-4">Save your time and effort with our tools</p>
                        </div>
                        <div className="wrap-why-choose flex">
                            <div className="box center hv-one">
                                <div className="icon">
                                    <PostsEveryDayIcon/>
                                </div>
                                <h4 className="link-style-1"><a href="#">Thousands of posts every day</a></h4>
                                <div className="images img-style relative"><img src={WhyChoose1} alt="images" /></div>
                                <p className="text-color-2">The lists are always refreshed and updated constantly, you will
                                    never miss</p>
                                <div className="meta style">
                                    <a href="#" className="btn-button flex align-center justify-center fs-13 fw-6 text-color-2"><span>See
                                        all listings</span>
                                        <LeftArrowIcon/>
                                    </a>
                                </div>
                            </div>
                            <div className="box center hv-one">
                                <div className="icon">
                                    <SmartFilterIcon/>
                                </div>
                                <h4 className="link-style-1"><a href="#">Smart filter</a></h4>
                                <div className="images img-style relative"><img src={WhyChoose2} alt="images" /></div>
                                <p className="text-color-2">Find the right house for you in the shortest amount of time</p>
                                <div className="meta style">
                                    <a href="#" className="btn-button flex align-center justify-center fs-13 fw-6 text-color-2"><span>See
                                        all listings</span>
                                        <LeftArrowIcon/>
                                    </a>
                                </div>
                            </div>
                            <div className="box center hv-one">
                                <div className="icon">
                                    <GreatSupportIcon/>
                                </div>
                                <h4 className="link-style-1"><a href="#">Great support</a></h4>
                                <div className="images img-style relative"><img src={WhyChoose3} alt="images" /></div>
                                <p className="text-color-2">After-sales care service, helpful advice to avoid scams</p>
                                <div className="meta style">
                                    <a href="#" className="btn-button flex align-center justify-center fs-13 fw-6 text-color-2"><span>See
                                        all listings</span>
                                        <LeftArrowIcon/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs