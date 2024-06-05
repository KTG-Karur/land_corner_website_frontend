import React from 'react'
import ContactIcon from '../../assets/assets/images/icon/contact-phone.svg';
function LoginModel() {
    return (
        <div className="modal fade bd-example-modal-lg" id="popup_bid" tabIndex={-1} role="dialog" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                    <div className="modal-body space-y-20 pd-40">
                        <div className="wrap-modal flex">
                            <div className="content">
                                <div className="title-login fs-30 fw-7 lh-45">Login</div>
                                <div className="comments">
                                    <div className="respond-comment">
                                        <form method="post" className="comment-form form-submit" action="#" acceptCharset="utf-8">
                                            <fieldset className="style-wrap">
                                                <label className="fw-6">Mobile No</label>
                                                <input type="number" className="input-form password-input" placeholder="Your Mobile No" />
                                                <img className="img-icon" src={ContactIcon} alt="images" />
                                            </fieldset>
                                            <button className="sc-button" name="submit" type="submit">
                                                <span>Login</span>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginModel