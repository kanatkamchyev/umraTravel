import Link from 'next/link'
import React, { useState } from 'react'
import { Login, MenuWhite } from '../../assets/svg/SVG'
import styles from '../../styles/navbar.module.css'
import Navli from '../NavBar/Navli'
import Image  from 'next/image'
import Logo from '../../public/imgs/logoHEAD.svg'



const MainNavs = () => {


  const [fix, setFix] = useState(false)
  function setFixed() {
    if (window.scrollY >= 400) {
      setFix(true)
    } else {
      setFix(false)
    }
  }

  return (
    <div className="left__navbars__team">
      <div className={styles.logo__fix__hidden}>
        <Image src={Logo} alt='/'/>
      </div>
    <div className={styles.nav__bar_li}>
      <ul>
        <Navli title='Главная' href={'/'} />
        <Navli title='Про нас' href={'about'} />
        <Navli title='Ажи-Баши' href={'Ajys'} />
        <Navli title='Контакты' href={'contact'} />
      </ul>
    </div>
    <div className={styles.navbar__left}>
      <Link href='Profilelogin'>
        <li>Войти <Login /></li>
      </Link>
    </div>

    <div className={styles.hidden__menu}>
      <MenuWhite/>
    </div>
  </div>

  )
}

export default MainNavs
