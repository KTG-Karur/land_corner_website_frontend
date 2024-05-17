import React from 'react'

function OverView() {
    return (
        <div className="wrap-overview wrap-style">
            <h3 className="titles">Overview</h3>
            <div className="icon-wrap flex">
                <div className="box-icon">
                    <div className="inner flex">
                        <div className="icon">
                            <img width={40} height={40} src="https://img.icons8.com/cotton/64/escalator-down--v2.png" alt="escalator-down--v2" />
                        </div>
                        <div className>
                            <div className="font-2">Floors</div>
                            <div className="font-2 fw-7">8</div>
                        </div>
                    </div>
                    <div className="inner flex">
                        <div className="icon">
                            <img width={40} height={40} src="https://img.icons8.com/fluency/48/property.png" alt="property" />
                        </div>
                        <div className>
                            <div className="font-2">Property type:</div>
                            <div className="font-2 fw-7">Individual house</div>
                        </div>
                    </div>
                </div>
                <div className="box-icon">
                    <div className="inner flex">
                        <div className="icon">
                            <img width={40} height={40} src="https://img.icons8.com/fluency/48/bath.png" alt="bath" />
                        </div>
                        <div className>
                            <div className="font-2">Bath room:</div>
                            <div className="font-2 fw-7">4</div>
                        </div>
                    </div>
                    <div className="inner flex">
                        <div className="icon">
                            <img width={40} height={40} src="https://img.icons8.com/external-filled-outline-design-circle/40/external-Time-Duration-online-shopping-filled-outline-design-circle.png" alt="external-Time-Duration-online-shopping-filled-outline-design-circle" />
                        </div>
                        <div className>
                            <div className="font-2">Availability:</div>
                            <div className="font-2 fw-7">Ready to move</div>
                        </div>
                    </div>
                </div>
                <div className="box-icon">
                    <div className="inner flex">
                        <div className="icon">
                            <img width={40} height={40} src="https://img.icons8.com/fluency/48/bed.png" alt="bed" />
                        </div>
                        <div className>
                            <div className="font-2">Bed room:</div>
                            <div className="font-2 fw-7">4</div>
                        </div>
                    </div>
                    <div className="inner flex">
                        <div className="icon">
                            <img width={40} height={40} src="https://img.icons8.com/fluency/48/age.png" alt="age" />
                        </div>
                        <div className>
                            <div className="font-2">Property age:</div>
                            <div className="font-2 fw-7">2 years</div>
                        </div>
                    </div>
                </div>
                <div className="box-icon">
                    <div className="inner flex">
                        <div className="icon">
                            <img width={40} height={40} src="https://img.icons8.com/fluency/48/building.png" alt="building" />
                        </div>
                        <div className>
                            <div className="font-2">Size:</div>
                            <div className="font-2 fw-7">572 Sq Ft</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OverView