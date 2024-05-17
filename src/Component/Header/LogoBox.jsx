import React from 'react'
import logoImage from '../../assets/assets/images/logo/landcornor.jpg';

function LogoBox() {
    return (
        <div className="logo-box flex">
            <div className="logo"><a href="index.html"><img src={logoImage} alt width={197} height={48} /></a></div>
        </div>
    )
}

export default LogoBox