import React from 'react'

function PricingList() {
    const details = [
        {
            title: 'Basic Plan',
            shortDesp: 'Automatically reach potential customers',
            price: '₹19',
            duration: 'month',
            descp: `
        <p className="texts">Per month, per company or team members</p>
        <ul className="check">
            <li className="flex-three">Basic Feature 1</li>
            <li className="flex-three">Basic Feature 2</li>
            <li className="flex-three">Basic Feature 3</li>
            <li className="flex-three">Basic Feature 4</li>
        </ul>`,
            styleType: '',
        }, {
            title: 'Pro Plan',
            shortDesp: 'Automatically reach potential customers',
            price: '₹87',
            duration: 'month',
            descp: `
        <p className="texts">Per month, per company or team members</p>
        <ul className="check">
            <li className="flex-three">Basic Feature 1</li>
            <li className="flex-three">Basic Feature 2</li>
            <li className="flex-three">Basic Feature 3</li>
            <li className="flex-three">Basic Feature 4</li>
        </ul>`,
            styleType: 'active',
        }, {
            title: 'Premimum Plan',
            shortDesp: 'Automatically reach potential customers',
            price: '₹120',
            duration: 'month',
            descp: `
        <p className="texts">Per month, per company or team members</p>
        <ul className="check">
            <li className="flex-three">Basic Feature 1</li>
            <li className="flex-three">Basic Feature 2</li>
            <li className="flex-three">Basic Feature 3</li>
            <li className="flex-three">Basic Feature 4</li>
        </ul>`,
            styleType: '',
        }]
    return (
        <React.Fragment>
            {details.map((item, index) => (
                <div className="col-lg-4 col-md-4">
                    <div className={`box box-style ${item.styleType}`} style={{ boxShadow: '0 .5rem 1rem rgba(0,0,0,.15)!important' }}>
                        <div className="sub-title fs-30 fw-7">{item.title}</div>
                        <p className="text-sub fw-6">
                            {item.shortDesp}
                        </p>
                        <div className="title-price flex">
                            <h2>{item.price}</h2>
                            <div className="mo fw-4 fs-30 fw-7">/ {item.duration}</div>
                        </div>
                        <p class="texts">Per month, per company or team members</p>
                        <ul class="check">
                            <li class="flex-three">Basic Feature 1</li>
                            <li class="flex-three">Basic Feature 2</li>
                            <li class="flex-three">Basic Feature 3</li>
                            <li class="flex-three">Basic Feature 4</li>
                        </ul>
                        <div className="button-pricing">
                            <a className="sc-button btn-1" href="#">
                                <span>Get started</span>
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </React.Fragment>
    )
}

export default PricingList