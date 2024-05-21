import React, { useState, useEffect } from 'react';

function index() {
    const [show, setShow] = useState('Simple');

    const handleClick = (value) => () => {
        setShow(value);
    };

    const [priceCalValue, setPriceCalValue] = useState(1);
    const [priceCalPrice, setPriceCalPrice] = useState(1);
    const [priceValue, setPriceValue] = useState(1);
    const [simpleValue, setSimpleValue] = useState(1);
    const [selectedUnit, setSelectedUnit] = useState("Sq.ft");
    const [priceUnit, setPriceUnit] = useState("Sq.ft");

    const units = ["Sq.ft", "Sq.mt", "Acres", "Cents", "Hectares"];
    const conversionRates = {
        "Sq.ft": { "Sq.mt": 1 / 10.764, "Acres": 1 / 43560, "Cents": 0.002, "Hectares": 1 / 107600 },
        "Sq.mt": { "Sq.ft": 10.764, "Acres": 1 / 4047, "Cents": 0.02, "Hectares": 1 / 10000 },
        "Acres": { "Sq.ft": 43560, "Sq.mt": 4047, "Cents": 100, "Hectares": 1 / 2.471 },
        "Cents": { "Sq.ft": 435.56, "Sq.mt": 40.46, "Acres": 0.01, "Hectares": 0.004 },
        "Hectares": { "Sq.ft": 107600, "Sq.mt": 10000, "Acres": 2.47, "Cents": 247.13 }
    };

    useEffect(() => {
        const price = priceCalValue * priceCalPrice;
        setPriceValue(price);
    }, [priceCalValue, priceCalPrice]);

    const handlePriceCalValueChange = (e) => {
        setPriceCalValue(Number(e.target.value));
    };

    const handlePriceCalPriceChange = (e) => {
        setPriceCalPrice(Number(e.target.value));
    };

    const handleSimpleValueChange = (e) => {
        setSimpleValue(Number(e.target.value));
        setCalculation(selectedUnit, Number(e.target.value));
    };

    const handleUnitChange = (unit) => {
        setSelectedUnit(unit);
        setCalculation(unit, simpleValue);
    };

    const handlePriceUnitChange = (unit) => {
        setPriceUnit(unit);
    };

    const setCalculation = (unit, value) => {
        const rates = conversionRates[unit];
        for (const [key, rate] of Object.entries(rates)) {
            const convertedValue = (value * rate).toFixed(6);
            document.getElementById(`simple_value_${key.replace('.', '_')}`).value = convertedValue;
        }
    };
    return (
        <div id="pagee" className="clearfix">
            <section className="flat-agencies-detail wg-tabs" style={{ marginTop: 30 }}>
                <div className="container">
                    <h2 className="titles title-2" style={{ marginTop: 30, marginBottom: 30, fontSize: 30 }}>Land Area Calculation</h2>
                    <div className="flat-tabs">
                        <div className="box-tab d-flex justify-content-center">
                            <ul className="menu-tab tab-title flex">
                                <li className={`item-title ${show === 'Simple' ? 'active' : 'style'}`}>
                                    <h3 className="inner" onClick={handleClick('Simple')}> Simple Calculation</h3>
                                </li>
                                <li className={`item-title ${show === 'Price' ? 'active' : 'style'}`}>
                                    <h3 className="inner" onClick={handleClick('Price')}> Price Calculation</h3>
                                </li>
                            </ul>
                        </div>
                        <div className="content-tab">
                            {/* Simple Calculation */}
                            <div className="content-inner tab-content wg-dream" style={{ display: show === 'Simple' ? 'block' : 'none' }}>
                                <div className="wrap-item form-wg flex flex-wrap row">
                                    <div className="col-lg-12 col-sm-12" style={{ padding: 40, boxShadow: '0 .5rem 1rem rgba(0,0,0,.15)!important' }}>
                                        <div className="wrap-form wrap-style">
                                            <div className="comments">
                                                <div className="respond-comment">
                                                    <form className="comment-form form-submit" noValidate>
                                                        <div className="simple_calc">
                                                            <label className="title-user fw-6">From</label>
                                                            <div className="nice-select" id="select_from_simple_calc" tabIndex={0}>
                                                                <span className="current">{selectedUnit}</span>
                                                                <ul className="list style">
                                                                    {units.map((unit) => (
                                                                        <li
                                                                            key={unit}
                                                                            data-value={unit}
                                                                            className={`option ${selectedUnit === unit ? 'selected' : ''}`}
                                                                            onClick={() => handleUnitChange(unit)}
                                                                        >
                                                                            {unit}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <fieldset>
                                                            <label className="fw-6">Value</label>
                                                            <input
                                                                type="text"
                                                                className="my-input"
                                                                name="text"
                                                                placeholder={0}
                                                                id="simple_cal_value"
                                                                onChange={handleSimpleValueChange}
                                                                required
                                                            />
                                                        </fieldset>
                                                        <div className="inner-1 form-wg flex" style={{ marginBottom: 30 }}>
                                                            <div className="input-item wg-box">
                                                                <label className="title-user fw-6" id="simple_label_Sq_mt">Sq.mt</label>
                                                                <input
                                                                    type="text"
                                                                    readOnly
                                                                    className="my-input"
                                                                    name="text"
                                                                    placeholder={0}
                                                                    required
                                                                    style={{ border: '1px solid #FFA920' }}
                                                                    id="simple_value_Sq_mt"
                                                                />
                                                            </div>
                                                            <div className="input-item wg-box">
                                                                <label className="title-user fw-6" id="simple_label_Acres">Acres</label>
                                                                <input
                                                                    type="text"
                                                                    readOnly
                                                                    className="my-input"
                                                                    name="text"
                                                                    placeholder={0}
                                                                    required
                                                                    style={{ border: '1px solid #FFA920' }}
                                                                    id="simple_value_Acres"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="inner-1 form-wg flex">
                                                            <div className="input-item wg-box">
                                                                <label className="title-user fw-6" id="simple_label_Cents">Cents</label>
                                                                <input
                                                                    readOnly
                                                                    type="text"
                                                                    className="my-input"
                                                                    name="text"
                                                                    placeholder={0}
                                                                    required
                                                                    style={{ border: '1px solid #FFA920' }}
                                                                    id="simple_value_Cents"
                                                                />
                                                            </div>
                                                            <div className="input-item wg-box">
                                                                <label className="title-user fw-6" id="simple_label_Hectares">Hectares</label>
                                                                <input
                                                                    readOnly
                                                                    type="text"
                                                                    className="my-input"
                                                                    name="text"
                                                                    placeholder={0}
                                                                    required
                                                                    style={{ border: '1px solid #FFA920' }}
                                                                    id="simple_value_Hectares"
                                                                />
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Price Calculation */}
                            <div className="content-inner tab-content wg-dream" style={{ display: show === 'Price' ? 'block' : 'none' }}>
                                <div className="col-lg-12 col-sm-12" style={{ padding: 40, boxShadow: '0 .5rem 1rem rgba(0,0,0,.15)!important' }}>
                                    <div className="wrap-form wrap-style shadow-lg">
                                        <div className="comments">
                                            <div className="respond-comment">
                                                <form className="comment-form form-submit" noValidate>
                                                    <div className="price_calc">
                                                        <label className="title-user fw-6">From</label>
                                                        <div className="nice-select" id="select_from_price_cal" tabIndex={0}>
                                                            <span className="current">{priceUnit}</span>
                                                            <ul className="list style">
                                                                {units.map((unit) => (
                                                                    <li
                                                                        key={unit}
                                                                        data-value={unit}
                                                                        className={`option ${priceUnit === unit ? 'selected' : ''}`}
                                                                        onClick={() => handlePriceUnitChange(unit)}
                                                                    >
                                                                        {unit}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <fieldset>
                                                        <label className="fw-6">Value</label>
                                                        <input
                                                            type="number"
                                                            className="my-input"
                                                            name="number"
                                                            placeholder={0}
                                                            id="price_cal_value"
                                                            onChange={handlePriceCalValueChange}
                                                            required
                                                        />
                                                    </fieldset>
                                                    <fieldset style={{ marginBottom: 60 }}>
                                                        <label className="fw-6">Price</label>
                                                        <input
                                                            type="number"
                                                            className="my-input"
                                                            name="number"
                                                            placeholder={0}
                                                            id="price_cal_price"
                                                            onChange={handlePriceCalPriceChange}
                                                            required
                                                        />
                                                    </fieldset>
                                                    <div className="inner-2 justify-space align-center flex">
                                                        <div className="title-user fw-6" id="select_from_data_price_cal">
                                                            Price
                                                        </div>
                                                        <h3 className="text-color-3" id="price_value">₹ {priceValue.toFixed(2)}</h3>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default index