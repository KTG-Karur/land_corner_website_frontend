import React from 'react'
import SellerCard from './SellerCard'
import PropertyCard from './PropertyCard'
import OfficeAddress from './OfficeAddress'
import ContactUs from './ContactUs'
import FooterMenu from './FooterMenu'
import BottomFooter from './BottomFooter'
import LoginMode from './LoginModel'
import RegisterModel from './RegisterModel'
import EnquireForm from './EnquireForm'
import PopupEnquire from './PopupEnquire'

function Index() {
    return (
        <>
            <LoginMode />
            <RegisterModel />
            <footer id="footer" className="clearfix home">
                <div className="container">
                    <div className="row">
                        <SellerCard />
                        <PropertyCard />
                        <OfficeAddress />
                        <ContactUs />
                        <FooterMenu />
                        <EnquireForm/>
                    </div>
                </div>
            </footer>
            <BottomFooter />
            <PopupEnquire/>
        </>
    )
}

export default Index