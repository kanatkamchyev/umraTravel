import React from 'react'
import styles from '../../styles/arab.module.css'
import Image from 'next/image'
import arab from '../../public/imgs/arab.png'
import DescribeAboutUs from '../DescribeAboutUs/DescribeAboutUs'


const Arab = () => {
    return (
        <div className='Arab'>
            <div className={styles.container}>
                <div className={styles.inside__arab}>
                    <div className={styles.left__arab}>
                    <div className={styles.back__color__leaft_arab}>
                        
                    </div>
                    </div>
                    <div className={styles.center__arab}>
                        <Image src={arab} alt='/' />
                    </div>
                    <div className={styles.right__arab}>
                        <DescribeAboutUs/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Arab