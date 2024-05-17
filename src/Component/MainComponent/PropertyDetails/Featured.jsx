import React from 'react'

function Featured() {
    return (
        <div className="wrap-featured wrap-style tf-amenities">
            <h3 className="titles">Featured</h3>
            <div className="box-featured flex">
                <div className="inner-1">
                    <div className="subtitle title-1 fw-6">
                        Essentials Facilities
                    </div>
                    <label className="flex"><input name="newsletter" type="checkbox" defaultChecked />
                        <span className="btn-checkbox" /><span className="fs-13">Water Connection</span>
                    </label>
                    <label className="flex"><input name="newsletter" type="checkbox" defaultChecked />
                        <span className="btn-checkbox" /><span className="fs-13">Drainage Connection</span>
                    </label>
                    <label className="flex"><input name="newsletter" type="checkbox" defaultChecked />
                        <span className="btn-checkbox" /><span className="fs-13">EB Connection</span>
                    </label>
                </div>
                <div className="inner-2">
                    <label className="flex"><input name="newsletter" type="checkbox" defaultChecked />
                        <span className="btn-checkbox" /><span className="fs-13">Borewell</span>
                    </label>
                    <label className="flex"><input name="newsletter" type="checkbox" defaultChecked />
                        <span className="btn-checkbox" /><span className="fs-13">Parking</span>
                    </label>
                    <label className="flex"><input name="newsletter" type="checkbox" defaultChecked />
                        <span className="btn-checkbox" /><span className="fs-13">Play area</span>
                    </label>
                </div>
                <div className="inner-3">
                    <div className="subtitle title-1 fw-6">Key Highlights</div>
                    <label className="flex"><input name="newsletter" type="checkbox" defaultChecked />
                        <span className="btn-checkbox" /><span className="fs-13">Lift</span>
                    </label>
                    <label className="flex"><input name="newsletter" type="checkbox" defaultChecked />
                        <span className="btn-checkbox" /><span className="fs-13">Swimming pool</span>
                    </label>
                    <label className="flex"><input name="newsletter" type="checkbox" defaultChecked />
                        <span className="btn-checkbox" /><span className="fs-13">24/7 Security</span>
                    </label>
                </div>
                <div className="inner-4">
                    <label className="flex"><input name="newsletter" type="checkbox" defaultChecked />
                        <span className="btn-checkbox" /><span className="fs-13">Gym</span>
                    </label>
                    <label className="flex"><input name="newsletter" type="checkbox" defaultChecked />
                        <span className="btn-checkbox" /><span className="fs-13">Arch</span>
                    </label>
                    <label className="flex"><input name="newsletter" type="checkbox" defaultChecked />
                        <span className="btn-checkbox" /><span className="fs-13">CCTV</span>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Featured