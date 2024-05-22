import React from 'react'
import { LoginIcon, SellPropertyIcon } from '../../Icons'
import { Link } from 'react-router-dom'

function LoginRegister() {
    return (
        <div className="header-account flex align-center">
            {/* Login Register */}
            <div className="register">
                <ul className="flex align-center">
                    <li>
                        <LoginIcon />
                    </li>
                    <li className><a href="#" data-toggle="modal" data-target="#popup_bid2">Register</a></li>
                    <li><span>/</span></li>
                    <li className><a href="#" data-toggle="modal" data-target="#popup_bid"> Login</a></li>
                </ul>
            </div>
            {/* Login Register */}
            {/* Post Property */}
            <div className="flat-bt-top sc-btn-top">
                <Link className="sc-button btn-icon" to="/PostProperty">
                    <SellPropertyIcon />
                    <span>Sell Property</span>
                </Link>
            </div>
            {/* Post Property */}
        </div>
    )
}

export default LoginRegister