import React, { useEffect, useState } from 'react'
import styles from '../../styles/ajyprofile.module.css'
import Image from 'next/image'
import { UserCalendar, UserFirstName, UserLocate, UserPhone, UserWhatsapp } from '../../assets/svg/SVG'
import Default from '../../public/imgs/user_default.svg'
import axios from 'axios'


export const getStaticPaths = async () => {
    const res = await fetch('https://back.umra.kg/api/v1/accounts/descriptions/');
    const data = await res.json();

    const {results} = data
    const paths = results.map((o:any) => {
        return {
            params: { id: o.id.toString() }
        }
    })
    return {
        paths,
        fallback: false
    }
  }
  
  
  export const getStaticProps = async (context:any) => {
    const id = context.params.id;
    const res = await fetch(`https://back.umra.kg/api/v1/accounts/descriptions/?user=${id}`);
    const data = await res.json();
    console.log('dsa', data)
  
    return {
        props: {
            description: data
        }
    }
  }
  


type Props = {
    user: any
}

interface Props1{
    description: any

}

const ProfileAjy = ({ user }: Props, {description}: Props1) => {

console.log(description);
console.log(user);


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

                            }
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ProfileAjy
