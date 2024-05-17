import React from 'react'

function VillageFilter() {
    return (
        <div className="form-group-3 form-style">
            <div className="group-select">
                <div className="nice-select" tabIndex={0}>
                    <span className="current">Village</span>
                    <ul className="list">
                        <li data-value className="option selected">
                            Village
                        </li>
                        <li data-value="twin" className="option">
                            Kamanallur
                        </li>
                        <li data-value="bunk" className="option">
                            Karuppathur
                        </li>
                        <li data-value="bunk" className="option">
                            Manavasi
                        </li>
                        <li data-value="bunk" className="option">
                            Mayanur
                        </li>
                        <li data-value="bunk" className="option">
                            Chinthalavadi
                        </li>
                        <li data-value="bunk" className="option">
                            Kallapalli
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default VillageFilter