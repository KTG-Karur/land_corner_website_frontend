import React, { useState } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import './BudgetFilter.css'

function BudgetFilter() {
    const [values, setValues] = useState({ min: 100, max: 1000000 });

    const handleChange = (value) => {
        setValues(value);
    };

    const formatCurrency = (amount) => {
        return amount.toLocaleString('en-IN', { maximumFractionDigits: 2 });
    };
    return (
        <div className="form-group-1 search-form form-style" style={{paddingLeft: '10px'}}>
            <div
                className="widget widget-price"
                style={{ padding: "1px 20px 15px 20px" }}
            >
                <div className="caption flex-two">
                    <div>
                        <span className="fw-6" style={{ fontWeight: 200 }}>
                            Budget&nbsp;&nbsp;
                        </span>
                         <span>₹{formatCurrency(values.min)}</span>
                        &nbsp;&nbsp;-&nbsp;&nbsp;
                        <span>₹{formatCurrency(values.max)}</span>
                    </div>
                </div>
                <div className="noUi-target noUi-ltr noUi-horizontal">
                    <div className="noUi-base">
                        <InputRange
                            minValue={100}
                            maxValue={1000000}
                            value={values}
                            onChange={handleChange}
                            formatLabel={(value) => `₹${value}`}
                            hideLabels
                            hideMinMaxLabels
                        />
                    </div>
                </div>
                <div className="slider-labels">
                    <div>
                        <input type="hidden" name="min-value" value={values.min} />
                        <input type="hidden" name="max-value" value={values.max} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BudgetFilter;
