import React from 'react'
import bgLogin from '../../assets/assets/images/section/bg-login.jpg';
import emailIcon from '../../assets/assets/images/icon/icon-gmail.svg';
import passwordIcon from '../../assets/assets/images/icon/icon-password.svg';
function LoginModel() {
    return (
        <div className="modal fade bd-example-modal-lg" id="popup_bid" tabIndex={-1} role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                    <div className="modal-body space-y-20 pd-40">
                        <div className="wrap-modal flex">
                            <div className="images flex-none">
                                <img src={bgLogin} alt="images" />
                            </div>
                            <div className="content">
                                <div className="title-login fs-30 fw-7 lh-45">Login</div>
                                <div className="comments">
                                    <div className="respond-comment">
                                        <form method="post" className="comment-form form-submit" action="#" acceptCharset="utf-8">
                                            <fieldset className>
                                                <label className="fw-6">Account</label>
                                                <input type="email" id="email" className="tb-my-input" name="email" placeholder="Email or user name" />
                                                <img className="img-icon img-email" src={emailIcon} alt="images" />
                                            </fieldset>
                                            <fieldset className="style-wrap">
                                                <label className="fw-6">Password</label>
                                                <input type="password" className="input-form password-input" placeholder="Your password" />
                                                <img className="img-icon" src={passwordIcon} alt="images" />
                                            </fieldset>
                                            <div className="title-forgot"><a className="fs-13">Forgot password</a> </div>
                                            <button className="sc-button" name="submit" type="submit">
                                                <span>Login</span>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                                <div className="text-box text-center fs-13">Allready have an account? <a className="font-2 fw-7 fs-13 color-popup text-color-3" data-toggle="modal" data-target="#popup_bid" data-dismiss="modal" aria-label="Close">Login</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginModel