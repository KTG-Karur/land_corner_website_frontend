import React from 'react'
import FormComponent from './FormComponent';

function FormLayout({ ...props }) {
    const { field, col } = props

    return (
        <div className="row">
            {field.map((item, index) => (
                <FormComponent field={item} key={index} col={6} />
            ))}
        </div>
    )
}

export default FormLayout