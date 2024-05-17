import React from 'react'

function PopupEnquire() {
    return (
        <div className="modal fade popup" id="enquire_success" tabIndex={-1} role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" style={{maxWidth: "500px"}} role="document">
                <div className="modal-content">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                    <div className="modal-body space-y-20 pd-40">
                        <div className="wrap-modal flex">
                            <div className="content">
                                <div className="title-login fs-30 fw-7 lh-45">Enquire</div>
                                <div className="comments">
                                    <div className="respond-comment">
                                        <div className="form-group">
                                            <div className="bg-white rounded-lg p-10 flex items-center shadow justify-center">
                                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                                    <svg width="80px" heigth="80px" viewBox="0 0 20 20" fill="green">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                    </svg>
                                                    <h3 className=" mb-4 text-gray-800 text-center font-bold" style={{ fontSize: 25 }}>Enquire has been
                                                        Queued</h3>
                                                    <div className="text-gray-600 mb-8 text-center">
                                                        Thank you. you request will be uploaded successfully, we will call you later
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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

export default PopupEnquire