import React from 'react'
import MainCardImage from '../Home/Card/MainCardImage'
import MainCardDetails from '../Home/Card/MainCardDetails'
import MainCardAuthor from '../Home/Card/MainCardAuthor'

function PropertyList() {
    return (
        <div className="box box-dream flex">
            <MainCardImage />
            <div className="content">
                <MainCardDetails />
                <MainCardAuthor />
            </div>
        </div>
    )
}

export default PropertyList