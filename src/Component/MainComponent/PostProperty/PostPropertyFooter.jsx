import React from 'react'
import footerImage from '../../../assets/assets/images/mark/mark-contact2.png'
function PostPropertyFooter() {
    return (
        <section className="flat-contact2 relative" style={{ marginTop: 40 }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="heading-section">
                            <h2>Find for your dream home and increase your investment opportunities</h2>
                            <p className="text-color-2 font-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed tristique
                                metus proin id lorem odio</p>
                            <div className="button-footer">
                                <a className="sc-button center btn-icon" href="#">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.25 6.75C2.25 15.034 8.966 21.75 17.25 21.75H19.5C20.0967 21.75 20.669 21.5129 21.091 21.091C21.5129 20.669 21.75 20.0967 21.75 19.5V18.128C21.75 17.612 21.399 17.162 20.898 17.037L16.475 15.931C16.035 15.821 15.573 15.986 15.302 16.348L14.332 17.641C14.05 18.017 13.563 18.183 13.122 18.021C11.4849 17.4191 9.99815 16.4686 8.76478 15.2352C7.53141 14.0018 6.58087 12.5151 5.979 10.878C5.817 10.437 5.983 9.95 6.359 9.668L7.652 8.698C8.015 8.427 8.179 7.964 8.069 7.525L6.963 3.102C6.90214 2.85869 6.76172 2.6427 6.56405 2.48834C6.36638 2.33397 6.1228 2.25008 5.872 2.25H4.5C3.90326 2.25 3.33097 2.48705 2.90901 2.90901C2.48705 3.33097 2.25 3.90326 2.25 4.5V6.75Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span>Contact Seller</span>
                                </a>
                            </div>
                        </div>
                        <div className="mark-img">
                            <img src={footerImage} alt="images" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PostPropertyFooter