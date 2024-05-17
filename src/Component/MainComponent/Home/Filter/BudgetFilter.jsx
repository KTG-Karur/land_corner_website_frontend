import React from 'react'

function BudgetFilter() {
    return (
        <div className="form-group-1 search-form form-style">
            <div class="widget widget-price" style={{padding: "1px 49px 14px 17px"}}>
                <div class="caption flex-two">
                    <div>
                        <span class="fw-6">Budget </span>
                        <span id="slider-range-value1"></span>
                        <span id="slider-range-value2"></span>
                    </div>
                </div>
                <div id="slider-range"></div>
                <div class="slider-labels">
                    <div>
                        <input type="hidden" name="min-value" value=""/>
                        <input type="hidden" name="max-value" value=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BudgetFilter