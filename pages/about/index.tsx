import React from 'react'
import DescribeAboutUs from '../../components/DescribeAboutUs/DescribeAboutUs'
import Footer from '../../components/Footer/Footer'
import flightToZam from "../../public/imgs/bargyn.png";
import NavBar from '../../components/NavBar/Nav-Bar'
import Image from 'next/image'



const AboutPage = () => {
  return (
    <div className='About_us_page'>
      <div className="max__container">
        <div className="inside__about__us">
          <div className="background__ajys__usimage">
            <div className="nav__bar__about__us">
              <NavBar />
            </div>
          </div>
          <div className="body__in__about-us">
            <div className="left-side__about-us">
            <DescribeAboutUs />
            </div>
            <div className="abous__us-image__background">
              <Image src={flightToZam} alt='/' />
            </div>
          </div>
          <Footer />
        </div>
      </div>

    </div>
  )
}

export default AboutPage
