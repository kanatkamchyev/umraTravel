import React from 'react'
import styles from '../../styles/arab.module.css'



const DescribeAboutUs = () => {
  return (
    <div className={styles.DescribeAboutUs}>
               <div className={styles.one__of__arab}>
                            Один из самых лучших туристических агенств чтобы  воплатить  ваши мечты в реальность
                        </div>
                        <div className={styles.standart__arab}>
                            В standart пакете основная разница, отличающийся от других пакетов это расположение отелей  Чем дальше отель расположен от Каабы, тем дешевле обойдется пакет. Программа включает весь пакет услуг, кроме питание.
                        </div>
                        <div className={styles.menu__arab__inside}>
                            <div className={styles.left__inside__arab}>
                                <div className={styles.title_and_num__arab}>
                                    <div className={styles.num__arab_circle}>
                                        1
                                    </div>
                                    <div className={styles.title__arab_text}>
                                    Отель
                                    </div>
                                </div>
                                <div className={styles.title_and_num__arab}>
                                    <div className={styles.num__arab_circle}>
                                        2
                                    </div>
                                    <div className={styles.title__arab_text}>
                                    Сомолет
                                    </div>
                                </div>
                                <div className={styles.title_and_num__arab}>
                                    <div className={styles.num__arab_circle}>
                                        3
                                    </div>
                                    <div className={styles.title__arab_text}>
                                    Виза
                                    </div>
                                </div>
                            </div>
                            <div className={styles.right__inside__arab}>
                                <div className={styles.title_and_num__arab}>
                                    <div className={styles.num__arab_circle}>
                                        4
                                    </div>
                                    <div className={styles.title__arab_text}>
                                    Тур пакеты
                                    </div>
                                </div>
                                <div className={styles.title_and_num__arab}>
                                    <div className={styles.num__arab_circle}>
                                        5
                                    </div>
                                    <div className={styles.title__arab_text}>
                                    Доп.услуги
                                    </div>
                                </div>
                                <div className={styles.title_and_num__arab}>
                                    <div className={styles.num__arab_circle}>
                                        6
                                    </div>
                                    <div className={styles.title__arab_text}>
                                    Спец.туры
                                    </div>
                                </div>
                            </div>
                        </div>
    </div>
  )
}

export default DescribeAboutUs
