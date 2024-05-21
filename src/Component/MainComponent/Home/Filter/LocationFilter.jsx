import React from 'react'

function LocationFilter() {
    return (
        <div className="form-group-3 form-style" style={{paddingLeft: '10px'}}>
            <div className="group-select">
                <div className="nice-select" tabIndex={0}><span className="current">Location</span>
                    <ul className="list">
                        <li data-value className="option selected">Location</li>
                        <li data-value="Chennai" className="option">Chennai</li>
                        <li data-value="Erode" className="option d">Erode</li>
                        <li data-value="Coimbatore" className="option">Coimbatore</li>
                        <li data-value="Madurai" className="option">Madurai</li>
                        <li data-value="Salam" className="option ">Salam</li>
                        <li data-value="Trichy" className="option">Trichy</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default LocationFilter