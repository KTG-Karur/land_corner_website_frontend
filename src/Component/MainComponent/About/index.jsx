import React from 'react'
import AboutUs from './AboutUs'
import OurServices from './OurServices'
import WhyChooseUs from './WhyChooseUs'
import ContactFrom from './ContactFrom'
import ContactDetails from './ContactDetails'

function index() {
  return (
    <div id="pagee" className="clearfix">
      <AboutUs />
      <OurServices />
      <WhyChooseUs />
      <ContactDetails />
      <ContactFrom />
    </div>

  )
}

export default index