import { useEffect, useState } from 'react'
import Arab from '../components/Arab/Arab'
import ContactUs from '../components/ContactWithUs/ContactUs'
import Footer from '../components/Footer/Footer'
import Hadja from '../components/Hadja/Hadja'
import Header from '../components/Header/Header'
import Tours from '../components/Tours/Tours'
import Image from 'next/image'
import arrow from '../public/imgs/aroow_top.svg'

export default function Home() {


  const [activeIcon, setActiveIcon] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 600) {
        setActiveIcon(true)
      } else {
        setActiveIcon(false)
      }
    })
  }, [])

  const scrollUp = () => {
    window.scrollTo(0, 0)
  }


  return (
    <>
    <div className='max__container'>
       <div className="home-page">
          <Header/>
          <Tours/>
          <Arab/>
          <Hadja/>
          <ContactUs/>
          <Footer/>
          {
        activeIcon ?

          <div className='icon-arow' onClick={scrollUp} >
            <Image src={arrow}  alt='/'/>
          </div> : null

      }
       </div>
    </div>

    </>
    
  )
}
