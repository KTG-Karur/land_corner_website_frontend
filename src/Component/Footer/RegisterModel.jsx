import React from 'react'
import bgRegister from '../../assets/assets/images/section/bg-register.jpg';
import userIcon from '../../assets/assets/images/icon/login-user.svg';
import gmailIcon from '../../assets/assets/images/icon/icon-gmail.svg';
import passwordIcon from '../../assets/assets/images/icon/icon-password.svg';
function RegisterModel() {
    return (
        <div className="modal fade popup " id="popup_bid2" tabIndex={-1} role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content ">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                    <div className="modal-body space-y-20 pd-40 style2">
                        <div className="wrap-modal flex">
                            <div className="images flex-none relative">
                                <img src={bgRegister} alt="images" />
                            </div>
                            <div className="content">
                                <div className="title-login fs-30 fw-7 lh-45" style={{marginBottom : "10px"}}>Register</div>
                                <div className="comments">
                                    <div className="respond-comment">
                                        <form method="post" className="comment-form form-submit" action="#" acceptCharset="utf-8" noValidate="novalidate">
                                            <fieldset style={{marginBottom : "10px"}}>
                                                <label className="fw-6">User name</label>
                                                <input type="text" className="tb-my-input" name="text" placeholder="User name" />
                                                <img className="img-icon img-name" src={userIcon} alt="images" />
                                            </fieldset>
                                            <fieldset style={{marginBottom : "10px"}}>
                                                <label className="fw-6">Email</label>
                                                <input type="email" className="tb-my-input" name="email" placeholder="Email" />
                                                <img className="img-icon" src={gmailIcon} alt="images" />
                                            </fieldset>
                                            <fieldset style={{marginBottom : "10px"}}>
                                                <label className="fw-6">Password</label>
                                                <input type="password" className="input-form password-input" placeholder="Your password" />
                                                <img className="img-icon" src={passwordIcon} alt="images" />
                                            </fieldset>
                                            <fieldset style={{marginBottom : "10px"}}>
                                                <label className="fw-6">Confirm password</label>
                                                <input type="password" className="input-form password-input" placeholder="Confirm password" />
                                                <img className="img-icon" src={passwordIcon} alt="images" />
                                            </fieldset>
                                            <button className="sc-button" name="submit" type="submit">
                                                <span>Sign Up</span>
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

export default RegisterModel