import React from 'react'
import ContactUs from '../../components/ContactWithUs/ContactUs'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/Nav-Bar'

const ContactPage = () => {
  return (
    <div className='contact-page'>
         <div className="max__container">
        <div className="inside__contact__us">
          <div className="background__ajys__usimage">
            <div className="nav__bar__contact__us">
              <NavBar />
            </div>
          </div>
          <ContactUs/>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default ContactPage
