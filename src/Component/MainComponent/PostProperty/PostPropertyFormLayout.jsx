import React, { useState, useEffect, useRef } from 'react';
import FormLayout from './FormLayout';

function PostPropertyFormLayout() {
    const [currentStep, setCurrentStep] = useState(0);
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const stepsRef = useRef([]);

    useEffect(() => {
        updateStepIndicator();
    }, [currentStep]);

    const handleNext = (e) => {
        e.preventDefault();
        if (validateFields(currentStep)) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePrevious = (e) => {
        e.preventDefault();
        setCurrentStep(currentStep - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateFields(currentStep)) {
            console.log('Form submitted', values);
        }
    };

    const validateFields = (step) => {
        const currentFields = stepsRef.current[step].querySelectorAll('.wizard-required');
        let valid = true;
        const newErrors = { ...errors };

        currentFields.forEach((field) => {
            // if (!field.value) {
            //     newErrors[field.id] = 'This field is required';
            //     valid = false;
            // } else {
            //     delete newErrors[field.id];
            // }
        });

        setErrors(newErrors);
        return valid;
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setValues({ ...values, [id]: value });
        setErrors({ ...errors, [id]: value ? '' : 'This field is required' });
    };

    const updateStepIndicator = () => {
        const stepItems = document.querySelectorAll('.form-wizard-steps li');
        const stepMove = document.querySelector('.form-wizard-step-move');

        stepItems.forEach((item, index) => {
            if (index === currentStep) {
                item.classList.add('active');
                const { left, width } = item.getBoundingClientRect();
                stepMove.style.left = `${left}px`;
                stepMove.style.width = `${width}px`;
            } else {
                item.classList.remove('active');
            }
        });
    };

    const basic_details = [{
        type: 'RADIO_FIELD',
        label: 'Ownership',
        id: 'ownership',
        name: 'ownership',
        required: true,
        category_type_id: '5265515151515151515',
        options: [{
            label: 'Individual',
            value: '111111111111111111111111111',
        }, {
            label: 'Agent',
            value: '111111111111111111111111111',
        }, {
            label: 'Builder',
            value: '111111111111111111111111111',
        }]
    }, {
        type: 'RADIO_FIELD',
        label: 'Property type',
        id: 'property_type',
        name: 'property_type',
        required: true,
        category_type_id: '5265515151515151515',
        options: [{
            label: 'Individual House',
            value: '111111111111111111111111111',
        }, {
            label: 'Plots',
            value: '111111111111111111111111111',
        }, {
            label: 'Agriculture Land',
            value: '111111111111111111111111111',
        }, {
            label: 'Sites',
            value: '111111111111111111111111111',
        }, {
            label: 'Apartment',
            value: '111111111111111111111111111',
        }, {
            label: 'Commercial Building',
            value: '111111111111111111111111111',
        }]
    }, {
        type: 'SELECT_FIELD',
        label: 'District',
        id: 'district',
        name: 'district',
        required: true,
        category_type_id: '5265515151515151515',
        options: [{
            label: 'Trichy',
            value: '111111111111111111111111111',
        }, {
            label: 'Salem',
            value: '111111111111111111111111111',
        }, {
            label: 'Erode',
            value: '111111111111111111111111111',
        }, {
            label: 'Coimbatore',
            value: '111111111111111111111111111',
        }, {
            label: 'Chennai',
            value: '111111111111111111111111111',
        }]
    }, {
        type: 'SELECT_FIELD',
        label: 'Taluk',
        id: 'taluk',
        name: 'taluk',
        required: true,
        category_type_id: '5265515151515151515',
        options: [{
            label: 'Karur',
            value: '111111111111111111111111111',
        }, {
            label: 'Aravakurichi',
            value: '111111111111111111111111111',
        }, {
            label: 'Manmangalam',
            value: '111111111111111111111111111',
        }, {
            label: 'Kulithalai',
            value: '111111111111111111111111111',
        }, {
            label: 'Krishnarayapuram',
            value: '111111111111111111111111111',
        }]
    }, {
        type: 'SELECT_FIELD',
        label: 'Village',
        id: 'village',
        name: 'village',
        required: true,
        category_type_id: '5265515151515151515',
        options: [{
            label: 'Kallapalli',
            value: '111111111111111111111111111',
        }, {
            label: 'Manavasi',
            value: '111111111111111111111111111',
        }, {
            label: 'Mayanur',
            value: '111111111111111111111111111',
        }, {
            label: 'Muthurengampatti',
            value: '111111111111111111111111111',
        }]
    }, {
        type: 'SELECT_FIELD',
        label: 'Ward',
        id: 'ward',
        name: 'ward',
        required: true,
        category_type_id: '5265515151515151515',
        options: [{
            label: 'Ward : 1',
            value: '111111111111111111111111111',
        }, {
            label: 'Ward : 2',
            value: '111111111111111111111111111',
        }, {
            label: 'Ward : 3',
            value: '111111111111111111111111111',
        }, {
            label: 'Ward : 4',
            value: '111111111111111111111111111',
        }]
    }, {
        type: 'TEXT_FIELD',
        label: 'Landmark',
        id: 'landmark',
        name: 'landmark',
        placeholder: 'Enter Landmark',
        required: true,
    }, {
        type: 'TEXT_FIELD',
        label: 'Survey No',
        id: 'survey_no',
        name: 'survey_no',
        placeholder: 'Enter Survey No',
        required: true,
    }, {
        type: 'CHECKBOX_FIELD',
        label: 'Location Advantage',
        id: 'location_advantage',
        name: 'location_advantage',
        required: true,
        category_type_id: '5265515151515151515',
        options: [{
            label: 'Water Connection',
            value: '111111111111111111111111111',
        }, {
            label: 'Drainage Connection',
            value: '111111111111111111111111111',
        }, {
            label: 'EB Connection',
            value: '111111111111111111111111111',
        }]
    }, {
        type: 'TEXTAREA_FIELD',
        label: 'Location Advantage',
        id: 'location_advantage',
        name: 'location_advantage',
        placeholder: 'Enter Location Advantage',
        required: true,
    },]

    return (
        <section className="wizard-section">
            <div className="row no-gutters">
                <div className="col-lg-12 col-md-12">
                    <div className="form-wizard">
                        <form onSubmit={handleSubmit}>
                            <div className="form-wizard-header">
                                <ul className="list-unstyled form-wizard-steps clearfix">
                                    {['1', '2', '3', '4'].map((step, index) => (
                                        <li key={index} className={index >= currentStep ? 'active' : 'activated'}><span>{step}</span></li>
                                    ))}
                                </ul>
                                <div className="form-wizard-step-move"></div>
                            </div>
                            {['Basic Details', 'Individual Details', 'Price Details', ''].map((title, index) => (
                                <fieldset
                                    key={index}
                                    className={`wizard-fieldset ${index === currentStep ? 'show' : ''}`}
                                    ref={(el) => (stepsRef.current[index] = el)}
                                >
                                    <h5>{title}</h5>
                                    {index === 0 && (
                                        <FormLayout field={basic_details} col={6}/>
                                    )}
                                    {index === 1 && (
                                        <>
                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    className="form-control wizard-required"
                                                    id="email"
                                                    value={values.email || ''}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor="email" className="wizard-form-text-label">Email*</label>
                                                <div className="wizard-form-error" style={{ display: errors.email ? 'block' : 'none' }}>{errors.email}</div>
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control wizard-required"
                                                    id="username"
                                                    value={values.username || ''}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor="username" className="wizard-form-text-label">User Name*</label>
                                                <div className="wizard-form-error" style={{ display: errors.username ? 'block' : 'none' }}>{errors.username}</div>
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="password"
                                                    className="form-control wizard-required"
                                                    id="pwd"
                                                    value={values.pwd || ''}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor="pwd" className="wizard-form-text-label">Password*</label>
                                                <div className="wizard-form-error" style={{ display: errors.pwd ? 'block' : 'none' }}>{errors.pwd}</div>
                                                <span className="wizard-password-eye"><i className="far fa-eye" /></span>
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="password"
                                                    className="form-control wizard-required"
                                                    id="cpwd"
                                                    value={values.cpwd || ''}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor="cpwd" className="wizard-form-text-label">Confirm Password*</label>
                                                <div className="wizard-form-error" style={{ display: errors.cpwd ? 'block' : 'none' }}>{errors.cpwd}</div>
                                            </div>
                                        </>
                                    )}
                                    {index === 2 && (
                                        <>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control wizard-required"
                                                    id="bname"
                                                    value={values.bname || ''}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor="bname" className="wizard-form-text-label">Bank Name*</label>
                                                <div className="wizard-form-error" style={{ display: errors.bname ? 'block' : 'none' }}>{errors.bname}</div>
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control wizard-required"
                                                    id="brname"
                                                    value={values.brname || ''}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor="brname" className="wizard-form-text-label">Branch Name*</label>
                                                <div className="wizard-form-error" style={{ display: errors.brname ? 'block' : 'none' }}>{errors.brname}</div>
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control wizard-required"
                                                    id="acname"
                                                    value={values.acname || ''}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor="acname" className="wizard-form-text-label">Account Name*</label>
                                                <div className="wizard-form-error" style={{ display: errors.acname ? 'block' : 'none' }}>{errors.acname}</div>
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control wizard-required"
                                                    id="acon"
                                                    value={values.acon || ''}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor="acon" className="wizard-form-text-label">Account Number*</label>
                                                <div className="wizard-form-error" style={{ display: errors.acon ? 'block' : 'none' }}>{errors.acon}</div>
                                            </div>
                                        </>
                                    )}
                                    {index === 3 && (
                                        <>
                                            <div className="form-group">
                                                Payment Type
                                                <div className="wizard-form-radio">
                                                    <input
                                                        name="paymentType"
                                                        id="mastercard"
                                                        type="radio"
                                                        checked={values.paymentType === 'Master Card'}
                                                        onChange={() => setValues({ ...values, paymentType: 'Master Card' })}
                                                    />
                                                    <label htmlFor="mastercard">Master Card</label>
                                                </div>
                                                <div className="wizard-form-radio">
                                                    <input
                                                        name="paymentType"
                                                        id="visacard"
                                                        type="radio"
                                                        checked={values.paymentType === 'Visa Card'}
                                                        onChange={() => setValues({ ...values, paymentType: 'Visa Card' })}
                                                    />
                                                    <label htmlFor="visacard">Visa Card</label>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control wizard-required"
                                                    id="honame"
                                                    value={values.honame || ''}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor="honame" className="wizard-form-text-label">Holder Name*</label>
                                                <div className="wizard-form-error" style={{ display: errors.honame ? 'block' : 'none' }}>{errors.honame}</div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6 col-sm-6">
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            className="form-control wizard-required"
                                                            id="cardname"
                                                            value={values.cardname || ''}
                                                            onChange={handleChange}
                                                        />
                                                        <label htmlFor="cardname" className="wizard-form-text-label">Card Number*</label>
                                                        <div className="wizard-form-error" style={{ display: errors.cardname ? 'block' : 'none' }}>{errors.cardname}</div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-6">
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            className="form-control wizard-required"
                                                            id="cvc"
                                                            value={values.cvc || ''}
                                                            onChange={handleChange}
                                                        />
                                                        <label htmlFor="cvc" className="wizard-form-text-label">CVC*</label>
                                                        <div className="wizard-form-error" style={{ display: errors.cvc ? 'block' : 'none' }}>{errors.cvc}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">Expiry Date</div>
                                                <div className="col-lg-4 col-md-4 col-sm-4">
                                                    <div className="form-group">
                                                        <select className="form-control" value={values.expiryDate || ''} onChange={handleChange} id="expiryDate">
                                                            <option value>Date</option>
                                                            {[...Array(31).keys()].map((day) => (
                                                                <option key={day + 1} value={day + 1}>
                                                                    {day + 1}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-4 col-sm-4">
                                                    <div className="form-group">
                                                        <select className="form-control" value={values.expiryMonth || ''} onChange={handleChange} id="expiryMonth">
                                                            <option value>Month</option>
                                                            {[
                                                                'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                                                                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
                                                            ].map((month, index) => (
                                                                <option key={month} value={index + 1}>
                                                                    {month}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-4 col-sm-4">
                                                    <div className="form-group">
                                                        <select className="form-control" value={values.expiryYear || ''} onChange={handleChange} id="expiryYear">
                                                            <option value>Year</option>
                                                            {[...Array(22).keys()].map((year) => (
                                                                <option key={year + 2019} value={year + 2019}>
                                                                    {year + 2019}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                    <div className="form-group clearfix">
                                        {index > 0 && (
                                            <button type="button" className="form-wizard-previous-btn float-left" onClick={handlePrevious}>
                                                Previous
                                            </button>
                                        )}
                                        {index < 3 && (
                                            <button type="button" className="form-wizard-next-btn float-right" onClick={handleNext}>
                                                Next
                                            </button>
                                        )}
                                        {index === 3 && (
                                            <button type="submit" className="form-wizard-submit float-right">
                                                Submit
                                            </button>
                                        )}
                                    </div>
                                </fieldset>
                            ))}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PostPropertyFormLayout