import React from 'react'

function ContactMap() {
    return (
        <section className="flat-map">
            <div className="container-fuild">
                <iframe className="map-content" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15668.077554104275!2d78.0687951!3d10.9619078!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa2fa9a78b52b9%3A0xe86c3501a91296f!2sKnock%20The%20Globe%20Technologies!5e0!3m2!1sen!2sin!4v1709874124778!5m2!1sen!2sin" allowFullScreen loading="lazy" />
            </div>
        </section>
    )
}

export default ContactMap