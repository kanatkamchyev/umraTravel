import Link from 'next/link'
import React from 'react'
import styles from '../../styles/navbar.module.css'
import MainNavs from '../MainNavbar/MainNavs'
import Image from 'next/image'
import Logo from '../../public/imgs/logoHEAD.svg'

export default function NavBar() {
  return (
    <div className={styles.container}>

      <div className={styles.navbar}>
        <div className={styles.logo__nav}>
          <Image src={Logo} alt='/'/>
        </div>
        <MainNavs />
      </div>
    </div>

  )
}
