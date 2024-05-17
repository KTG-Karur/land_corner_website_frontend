import React from 'react'
import PropertyTypeFilter from '../Home/Filter/PropertyTypeFilter'
import LocationFilter from '../Home/Filter/LocationFilter'
import BudgetFilter from '../Home/Filter/BudgetFilter'
import TalukFilter from '../Home/Filter/TalukFilter'
import VillageFilter from '../Home/Filter/VillageFilter'

function PropertyFilter() {
    return (
        <div className="top-filters">
        <div className="container6">
            <div className="row">
                <div className="col-lg-12">
                    <div className="flat-tabs style2 flex">
                        <div className="content-tab">
                            <div className="content-inner tab-content">
                                <div className="form-sl">
                                    <form method="post">
                                        <div className="wd-find-select flex">
                                            <PropertyTypeFilter />
                                            <LocationFilter />
                                            <TalukFilter />
                                            <VillageFilter />
                                            <BudgetFilter />
                                            <div className="button-search sc-btn-top">
                                                <a className="sc-button button-top" href="#">
                                                    <span>Search Now</span>
                                                    <i className="far fa-search" />
                                                </a>
                                            </div>
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
    )
}

export default PropertyFilter