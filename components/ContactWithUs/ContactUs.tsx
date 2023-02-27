import React, { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";


import styles from '../../styles/contactus.module.css'
import callme from '../../public/imgs/callme.svg'
import mess from '../../public/imgs/mess.svg'
import loacli from '../../public/imgs/locali.svg'
import Image from 'next/image';
import { Instagramm, Telegramm, WhatsApp } from '../../assets/svg/SVG';




type Contacts = {
  name: string,
  phone: number,
  email: string,
  message: string

}



const ContactUs = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
} = useForm<Contacts>();


const onSubmit = (e: any) => {
};

const defaultState = {
    name: '',
    phone: '',
    email: '',
    message: '',
}
const [state, setState] = useState(defaultState)
function fethDeal(data: any) {
    return fetch('https://zamzamtravel.bitrix24.ru/rest/1/8mbsaf4h0gzrk8ut/crm.deal.add.json', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "fields": {
                "TITLE": `Запрос с cайта | ${data.id}`,
                "TYPE_ID": "GOODS",
                "STAGE_ID": "PREPARATION",
                "CONTACT_ID": data.result,
                "UF_CRM_1671430670995": `${data.first_name}`,
                "UF_CRM_1671430683659": data.date,
                "UF_CRM_1671430658107": data?.category?.title,
                "COMMENTS": data.message,
                "CURRENCY_ID": "USD",
                "OPPORTUNITY": data.public_price,
            }
        }),
    })
}


const handleSend = (e: any) => {
    e.preventDefault()
    let form = e.target
    let email = form.mail.value;
    let message = form.message.value;
    const data = JSON.stringify({
        "fields": {
            "NAME": state.name,
            "PHONE": [
                {
                    "VALUE": state.phone,
                    "VALUE_TYPE": "MOBILE"
                }
            ],
            "EMAIL": email,
            "MESSAGE": message,
        }
    })
    setState(defaultState)
    // toast.success('Вашe сообщение отправлено')

    fetch('https://zamzamtravel.bitrix24.ru/rest/1/8mbsaf4h0gzrk8ut/crm.contact.list', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "filter": { "PHONE": state.phone },
            "select": ["ID"]
        }),
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            if (data.result.length === 0) {
                fetch('https://zamzamtravel.bitrix24.ru/rest/1/8mbsaf4h0gzrk8ut/crm.contact.add', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: data,
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data)
                        if (data.result) {
                            fethDeal({ result: data.result, message: state.message })
                                .then((res) => res.json())
                                .then((data) => {
                                    console.log(data)
                                    if (data.result) {
                                        setState(defaultState)
                                    }
                                })
                        }
                    })
            } else {
                fethDeal({ result: data.result[0].ID, message: state.message })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data)
                        if (data.result) {
                            setState(defaultState)
                        }
                    })
            }
        }
        )
}



  return (
    <div className={styles.Contactus}>
       <div className={styles.container}>
                <div className={styles.contact_wrapper}>
                    <div className={styles.left_wrapper__contact}>
                        <div className={styles.left_wrapper__inside}>
                            <div className={styles.call__us}>Свяжитесь с нами</div>
                            <div className={styles.our__workers}>Оставьте ваши контакты и наши сотрудники свяжиться с вами в течение 24 часов </div>
                            <div className={styles.us___comunication}>
                              <Image src={callme} alt=""/>
                                <div className={styles.us__nom}>
                                    <a href="tel:+996554072525"> +996 (554) 072 525</a>
                                </div>
                            </div>
                            <div className={styles.us___comunication}>
                                <Image src={mess} alt=""/>

                                <div className={styles.us__gmail}>
                                    <a href="#"> contact@Zamzam.kg</a>
                                </div>
                            </div>
                            <div className={styles.us___comunication}>
                                <Image src={loacli} alt=""/>
                                <div className={styles.our__locate}>
                                    Курманжан датка 413, г. Ош
                                </div>
                            </div>
                            <div className={styles.bottom__contac}>
                                <div className={styles.online__contact}>
                                    <div className={styles.to__us}>
                                        <a href="https://instagram.com/zamzam_travel.osh?igshid=Yzg5MTU1MDY="> 
                                        <Instagramm/>
                                        </a>
                                    </div>

                                    <div className={styles.to__us}>
                                        <a href="https://t.me/AlimovTILLO">
                                        <Telegramm/>  
                                        </a>

                                    </div>
                                    <div className={styles.to__us}>
                                        <a href="https://wa.me/996554072525">
                                          <WhatsApp/>
                                        </a>
                                    </div>
                                </div>
                                <div className={styles.image_elipse} >
                                    <h1>ZamZam</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.right_wrapper__contact}>
                        <div className={styles.right_wrapper__inside}>
                            <form className={styles.form_active__inputs}
                                onSubmit={e => handleSend(e)}>
                                <div className={styles.contact_inputs}>
                                    <div className={styles.two_inputs}>
                                        <div className={`input__side ${errors?.name && 'error'}`}>
                                            <div>Имя</div>

                                            <input type="text" value={state.name} name="name" onChange={(e) => setState({ ...state, name: e.target.value })} />
                                        </div>
                                        <div className={`input__side ${errors?.phone && 'error'}`}>
                                            <div>Телефон</div>
                                            <input type="text" value={state.phone} name="phone" onChange={(e) => setState({ ...state, phone: e.target.value })} />


                                        </div>
                                    </div>
                                    <div className={`input__side ${errors?.email && 'error'}`}>
                                        <div>Mail</div>
                                        <input type="text" name="mail" value={state.email} onChange={(e) => setState({ ...state, email: e.target.value })} />
                                    </div>
                                    <div className={`input__side ${errors?.message && 'error'}`}>
                                        <div>Сообщение</div>
                                        <input className='longwidth' type="text" name="message" value={state.message} onChange={(e) => setState({ ...state, message: e.target.value })} />
                                        {errors?.message && (
                                            <div className="error_text">заполните пропущенные поля</div>
                                        )}
                                    </div>

                                </div>
                                <div className={styles.btn_to_send}>
                                    <button
                                        disabled={state.name === '' || state.phone === '' || state.email === '' || state.message === '' ? true : false}
                                    >
                                        {
                                                'Отправить'
                                        }
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default ContactUs
