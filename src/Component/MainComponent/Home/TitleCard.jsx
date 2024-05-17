import React from 'react'
import TitleCardDetails from './TitleCardDetails'
function TitleCard({title, shortDesp, type, colNo}) {
    return (
        <section className="flat-blog tf-section bg-1" style={{padding: "30px"}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="heading-section center">
                            <h2>{title}</h2>
                            <p className="text-color-4" style={{ marginBottom: 20 }}>{shortDesp}</p>
                        </div>
                    </div>
                   <TitleCardDetails type={type} colNo={colNo}/>
                </div>
            </div>
        </section>
    )
}

export default TitleCard