import React from 'react'

function PropertyTypeFilter() {
    return (
        <div className="form-group-2 form-style">
            <div className="group-select">
                <div className="nice-select" tabIndex={0}><span className="current">Property type</span>
                    <ul className="list">
                        <li data-value className="option selected">Property type</li>
                        <li data-value="Individual House" className="option">Individual House</li>
                        <li data-value="Apartment" className="option">Apartment</li>
                        <li data-value="Plot" className="option">Plot</li>
                        <li data-value="Sites" className="option">Sites</li>
                        <li data-value="Commercial" className="option">Commercial</li>
                        <li data-value="Agriculture" className="option">Agriculture</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PropertyTypeFilter