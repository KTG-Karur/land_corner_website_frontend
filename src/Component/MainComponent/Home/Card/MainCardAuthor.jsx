import React from 'react'
import Author from '../../../../assets/assets/images/author/author-list-1.jpg'

function MainCardAuthor() {
    return (
        <div className="img-box flex justify-space align-center">
            <div className="img-author flex align-center">
                <img src={Author} alt="images" />
                <div className="fs-13 fw-6 link-style-1">
                    <a href="#">Kathryn Murphy</a>
                </div>
            </div>
            <div className="days">23/03/2024</div>
        </div>
    )
}

export default MainCardAuthor