import React from 'react'
import { MessageSendIcon } from '../../../Icons'

function ContactFrom() {
    return (
        <section className="flat-contact-page " style={{ marginBottom: 50, boxShadow: '0px 4px 26px 0px rgba(66, 71, 76, 0.0784313725)' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div id="comments" className="comments bg-white">
                            <div className="respond-comment">
                                <form method="post" id="contactform" className="comment-form form-submit"  acceptCharset="utf-8" noValidate="novalidate">
                                    <div className="text-wrap flex form-wg row">
                                        <fieldset className="info-box col-lg-6 col-sm-12  " style={{ marginLeft: 0, paddingLeft: 22 }}>
                                            <label className="fw-6">Your name</label>
                                            <input type="text" className="tb-my-input" name="text" placeholder="Your name" required />
                                        </fieldset>
                                        <fieldset className="info-box col-lg-6 col-sm-12 m-0" style={{ marginLeft: 0 }}>
                                            <label className="fw-6">Your phone</label>
                                            <input type="number" className="tb-my-input" name="number" onkeypress="if(this.value.length==10) return false;" placeholder="Your number" required />
                                        </fieldset>
                                    </div>
                                    <fieldset className="message-wrap">
                                        <label className="fw-6">Message</label>
                                        <textarea id="comment-message" name="message" rows={4} tabIndex={4} placeholder="Your message" aria-required="true" defaultValue={""} />
                                    </fieldset>
                                    <div className="button-boxs">
                                        <button className="sc-button btn-icon" name="submit" type="submit">
                                            <MessageSendIcon/>
                                            <span>Send request</span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactFrom