import React, { useState } from 'react'
import BudgetFilter from './BudgetFilter'
import PropertyTypeFilter from './PropertyTypeFilter'
import LocationFilter from './LocationFilter'

function HomeFilter() {
    return (
        <div className="flat-tabs themesflat-tabs">
            <div className="content-tab">
                <div className="content-inner tab-content flex-center">
                    <div className="form-sl">
                        <form method="post">
                            <div className="wd-find-select flex">
                                <div className="inner-group">
                                    <PropertyTypeFilter />
                                    <LocationFilter />
                                    <BudgetFilter />
                                </div>
                                <div className="button-search sc-btn-top">
                                    <a className="sc-button" href="#">
                                        <span>Search Now</span>
                                        <i className="far fa-search text-color-1" />
                                    </a>
                                </div>
                            </div>
                        </form>
                        {/* End Job  Search Form*/}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeFilter