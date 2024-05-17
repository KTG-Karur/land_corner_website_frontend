import React from 'react'

function EnquireForm() {
    return (
        <div className="col-lg-3 col-md-6 col-12">
            <div className="widget widget-menu widget-form">
                <h3>Newsletter</h3>
                <form method="post" className="comment-form form-submit" action="#" acceptCharset="utf-8">
                    <div className="text-wrap clearfix">
                        <fieldset className="info-box">
                            <input type="text" className="tb-my-input" name="text" placeholder="Your Name" required />
                        </fieldset>
                        <div className="text-wrap clearfix">
                            <fieldset className="info-box">
                                <input type="number" className="tb-my-input" name="text" placeholder="Your phone" required />
                            </fieldset>
                        </div>
                        <div className="text-wrap clearfix">
                            <fieldset className>
                                <textarea id="comment-message" name="message" rows={4} tabIndex={4} placeholder="Your message" aria-required="true" defaultValue={""} />
                            </fieldset>
                        </div>
                        <button name="submit" type="submit" className="button btn-submit-comment btn-1 btn-8" data-toggle="modal" data-target="#enquire_success" data-dismiss="modal" style={{color : "#00ab72" , backgroundColor : "#fff5e0"}}>
                            <span>Submit</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EnquireForm