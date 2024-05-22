import React from 'react'

function FormComponent({ ...props }) {
    const { field, col } = props

    switch (field.type) {
        case 'TEXT_FIELD':
            return (
                <div className={`col-lg-${col} col-sm-12`} style={{ marginBottom: 15 }}>
                    <label className="fw-6">{field.label} <span style={{ fontWeight: 'bold', color: 'red' }}>*</span></label>
                    <input type="text" className="form-control wizard-required" placeholder={field.placeholder} name={field.name} required={field.required} style={{ color: '#000', background: '#fff', border: '1px solid #E5E5EA !important', padding: '10px 20px' }}
                    />
                </div>
            )
            break;

        case 'RADIO_FIELD':
            return (
                <div className={`col-lg-${col} col-sm-12`} style={{ marginBottom: 15 }}>
                    <label className="fw-6">{field.label}<span style={{ fontWeight: 'bold', color: 'red' }}>*</span></label>
                    <input type="hidden" name="category_type_id" required={field.required} value={field.category_type_id} />
                    <div style={{ marginTop: 20 }}>
                        {field.options.map((item, index) => (
                            <div className="wizard-form-radio" style={{ marginBottom: '10px' }}>
                                <input name={field.name} id={item.label} type="radio" checked={index== 0 ? true : false}/>
                                <label htmlFor={item.label} value={item.value}>{item.label}</label>
                            </div>
                        ))}
                    </div>
                </div>
            )
            break;

        case 'SELECT_FIELD':
            return (
                <div className={`col-lg-${col} col-sm-12`} style={{ marginBottom: 15 }}>
                    <label className="fw-6" style={{ marginBottom: 5 }}>{field.label}<span style={{ fontWeight: 'bold', color: 'red' }}>*</span></label>
                    <input type="hidden" name="category_type_id" required={field.required} value={field.category_type_id} />
                    <div className="form-group">
                        <select className="form-control" name={field.name} id={field.label}>
                            <option value>Select Taluk</option>
                            {field.options.map((item, index) => (
                                <option key={index} value={item.value}>
                                    {item.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            )
            break;

        case 'TEXTAREA_FIELD':
            return (
                <div className={`col-lg-${col} col-sm-12`} style={{ marginBottom: 15 }}>
                    <label className="fw-6" style={{ marginBottom: 5 }}>{field.label}<span style={{ fontWeight: 'bold', color: 'red' }}>*</span></label>
                    <textarea type="text" className="form-control wizard-required" name={field.name} id={field.id} placeholder={field.placeholder}></textarea>
                </div>
            )
            break;

        case 'CHECKBOX_FIELD':
            return (
                <div className={`col-lg-${col} col-sm-12`} style={{ marginBottom: 15 }}>
                    <div className="wrap-featured wrap-style tf-amenities" style={{ padding: 0, boxShadow: 'unset' }}>
                        <label className="title-user fw-6">{field.label}<span style={{ fontWeight: 'bold', color: 'red' }}>*</span></label>
                        <input type="hidden" name="category_type_id" required={field.required} value={field.category_type_id} />
                        <div className="box-featured flex row">
                            {field.options.map((item, index) => (
                                <div className=" col-md-6 col-xs-6 " style={{ marginBottom: 15 }}>
                                    <label className="flex"><input name={field.name} id={field.label} type="checkbox" value={item.value} checked={index== 0 ? true : false}/>
                                        <span className="btn-checkbox" /><span className="fs-13">{item.label}</span>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            )
            break;
    }
}

export default FormComponent