import React from 'react'

function TalukFilter() {
    return (
        <div className="form-group-2 form-style">
            <div className="group-select">
                <div className="nice-select" tabIndex={0}>
                    <span className="current">Taluk</span>
                    <ul className="list">
                        <li data-value className="option selected">
                            Taluk
                        </li>
                        <li data-value="East" className="option">
                            Aravakurichi
                        </li>
                        <li data-value="West" className="option">
                            Karur
                        </li>
                        <li data-value="North" className="option">
                            Manmangalam
                        </li>
                        <li data-value="South" className="option">
                            Kulithalai
                        </li>
                        <li data-value="Northeast" className="option">
                            Krishnarayapuram
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TalukFilter