import Link from 'next/link'
import React from 'react'
import styles from '../../styles/navbar.module.css'

type Props = {
title: any,
href: string,
}

const Navli = ({title, href}:Props) => {
  return (
    <div className={styles.nav__bar__li}>
    <Link href={href}>
    <li>{title}</li>
    </Link>
    </div>
  )
}

export default Navli
