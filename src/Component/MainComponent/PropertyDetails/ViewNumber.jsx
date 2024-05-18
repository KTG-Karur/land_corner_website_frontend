import React from 'react'
import PersionImage from '../../../assets/assets/images/icon/contact-name.svg'
import ContactImage from '../../../assets/assets/images/icon/contact-phone.svg'
function ViewNumber() {
    return (
        <>
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
            <div className="modal fade popup" id="popup_register" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document" style={{maxWidth: '500px'}}>
                    <div className="modal-content">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                        <div className="modal-body space-y-20 pd-40">
                            <div className="wrap-modal flex">
                                <div className="content">
                                    <div className="title-login fs-30 fw-7 lh-45" style={{ marginBottom: 20 }}>Register</div>
                                    <div className="comments">
                                        <div className="respond-comment">
                                            <div method="post" className="comment-form form-submit" action="#" acceptCharset="utf-8">
                                                <fieldset className>
                                                    <label className="fw-6">Your name</label>
                                                    <input type="text" id="name" className="tb-form-control wizard-required" name="name" placeholder="Enter your name" />
                                                    <img className="img-icon img-email" src={PersionImage} alt="images" />
                                                </fieldset>
                                                <fieldset className="style-wrap" style={{ marginBottom: 32 }}>
                                                    <label className="fw-6">Your mobile</label>
                                                    <input type="number" onkeypress="if(this.value.length==10) return false;" placeholder="Enter your mobile" maxLength={10} />
                                                    <img className="img-icon" src={ContactImage} alt="images" />
                                                </fieldset>
                                                <button className="sc-button" name="submit" type="submit" data-toggle="modal" data-target="#popup_otp" data-dismiss="modal">
                                                    <span>SEND OTP</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewNumber