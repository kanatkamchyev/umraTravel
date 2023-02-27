import React, { useEffect, useState } from 'react'
import styles from '../../styles/ajyprofile.module.css'
import Image from 'next/image'
import { UserCalendar, UserFirstName, UserLocate, UserPhone, UserWhatsapp } from '../../assets/svg/SVG'
import Default from '../../public/imgs/user_default.svg'
import axios from 'axios'
import { useRouter } from 'next/router'
import iks from '../../public/imgs/fucked.svg'
import screen from '../../public/imgs/ajy_screen.svg'
import { Item } from '../Item/Item'






type Props = {
    user: any
}


const ProfileAjy = ({ user }: Props,) => {
    const router = useRouter()
    const { id } = router.query
    const [describe, setDescribe] = useState([])
    const [gallery, setGallery] = useState([])
    const [tours, setTours] = useState([])

    useEffect(() => {
        axios.get(`https://back.umra.kg/api/v1/accounts/descriptions/?user=${id}`).then((res: any) => setDescribe(res.data.results)),
            axios.get(`https://back.umra.kg/api/v1/accounts/gallery/?user=${id}`).then((res: any) => setGallery(res.data.results))
        axios.get('https://back.umra.kg/api/v1/tours/').then((res: any) => setTours(res.data.results))

    }, [])

    console.log(tours);

    const { title }: any = router.query



    const [model, setModel] = useState(false)
    const [tempImgSrc, setTempImgSrc] = useState('')
    const getImg = (imgSrc: any) => {
        setTempImgSrc(imgSrc)
        setModel(true)
    }



    return (
        <div className='ProfileAjy'>
            <div className={styles.profile__top__side}>
                <div className={styles.profile__top__left}>
                    <div className={styles.left__about__user}>
                        <div className={styles.user__avatar}>
                            <Image src={Default} alt='/' />
                        </div>
                        <div className={styles.information__user}>
                            <ul>
                                {
                                    user.first_name ?
                                        <li><UserFirstName />{user.first_name} </li>
                                        : null
                                }
                                {
                                    user.city ?
                                        <li><UserLocate />{user.city}</li>
                                        : null

                                }
                                {
                                    user.experience ?

                                        user.experience > 5 ? <li><UserCalendar /> {user.experience} лет профисинального опыта</li> :
                                            <li> {user.experience} года профисинального опыта</li>


                                        : null
                                }

                                {
                                    user.phone ?
                                        <li><a href={`tel:${user.phone}`}><UserPhone />{user.phone} </a></li>
                                        :
                                        null
                                }
                                {
                                    user.whatsapp ?
                                        <li><a href={`https://wa.me/${user.whatsapp}`}><UserWhatsapp />{user.whatsapp} </a></li>
                                        : null
                                }
                            </ul>
                        </div>

                        <div className={styles.instagramm__side}>
                            <div className={styles.intagramm__title}>
                                Инстаграм
                            </div>
                            <div className="instagramm__published">

                            </div>

                            <div className={styles.instagramm__btn}>
                                <button>
                                    Посмотреть профиль
                                </button>
                            </div>

                        </div>
                    </div>
                    <div className={styles.right__about__user}>
                        <div className={styles.user__descriptions}>
                            {
                                describe.map((talent: any, id: number) => {
                                    return (
                                        <div className={styles.about_experiense} key={id}>
                                            <div className={styles.experiense}>{talent.title}</div>
                                            <div className={styles.experiense_description}>
                                                {talent.description}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className={styles.about_reis}>
                            <div className={styles.reis_title}>Рейсы</div>
                            <table className={styles.kanat_table}>
                                <thead className={styles.kanat__thead}>
                                    <tr className={styles.kanat__tr}>
                                        <td className={styles.kanat__td}>№</td>
                                        <td className={styles.kanat__td}>Дата вылета</td>
                                        <td className={styles.kanat__td}>Дата прилета</td>
                                        <td className={styles.kanat__td}>Маршрут</td>
                                        <td className={styles.kanat__td}>Пакет</td>
                                    </tr>
                                </thead>
                                <tbody className={styles.kanat_tbody}>
                                    {tours.length != 0
                                        ? tours.map((item: any, index: any) => (
                                            <Item key={item.id} item={item} index={index} />
                                        ))
                                        : null
                                    }

                                </tbody>
                            </table>
                            {
                                tours.length == 0 ? (
                                    <div className="profileAji__warning">
                                        <div>Рейсов нет</div>
                                    </div>
                                )
                                    : null
                            }
                        </div>
                    </div>
                </div>
                <div className={styles.bottom__about_gallery}>
                    <div className={styles.gallery__time}>
                        <div className={model ? 'model open' : 'model'}>
                            <div className={styles.appears}>
                                <img src={tempImgSrc} alt="" />

                            </div>
                            <div className={styles.closed__gallery} onClick={() => setModel(false)}>
                                <Image src={iks} alt="/" />
                            </div>
                        </div>

                        <div className={styles.gallery__images}>
                            {
                                user.role === 4 || user.role === 3 ?
                                    <div className="with__gallery-title">

                                        <div className={styles.gallery__title}> {gallery.length > 0 ? 'Галлерея' : ''}</div>
                                        <div className={styles.images__inside_this__gallery}>
                                            {

                                                gallery.map((item: any) => (
                                                    <div className={styles.pics} key={item.id} onClick={() => getImg(item.image)}>
                                                        <img className={styles.item__image__gallery} src={item.image} alt="" />
                                                        <div className={styles.overlay}>
                                                            <div className={styles.hover}>
                                                                <h4><Image src={screen} alt="/" />  на весь экран</h4>
                                                            </div>
                                                        </div>
                                                    </div>

                                                ))
                                            }
                                        </div>
                                    </div> :
                                    null
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ProfileAjy
