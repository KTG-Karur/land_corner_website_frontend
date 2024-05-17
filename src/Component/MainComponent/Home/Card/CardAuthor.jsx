import React from 'react'
import author from '../../../../assets/assets/images/author/author-17.jpg';

function CardAuthor() {
    return (
        <div className="days-box flex justify-space align-center">
            <div className="img-author hv-tool"><img src={author} alt="images" /></div>
            <a href="#">Kathryn Murphy</a>
            <div className="days">23/03/2024</div>
        </div>
    )
}

export default CardAuthor