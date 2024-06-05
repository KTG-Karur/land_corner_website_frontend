import React from 'react'
import logoImage from '../../assets/assets/images/logo/landcornor.jpg';
import { Link } from 'react-router-dom';

function LogoBox() {
    return (
        <div className="logo-box flex">
            <div className="logo"><Link to="/"><img src={logoImage} alt width={197} height={48} /></Link></div>
        </div>
    )
}

export default LogoBox