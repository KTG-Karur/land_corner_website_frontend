import React from 'react'
import ContactDetails from './ContactDetails'
import ContactMap from './ContactMap'
import ContactForm from './ContactForm'

function index() {
    return (
        <div id="pagee" className="clearfix">
            <ContactDetails />
            <ContactMap />
            <ContactForm />
        </div>
    )
}

export default index