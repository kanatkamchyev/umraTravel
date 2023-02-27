import React, { useEffect, useState } from 'react'
import styles from '../../styles/hadja.module.css'
import hadja from '../../public/imgs/hadja.png'
import Image from 'next/image'
import axios from 'axios'
import QuestionsItem from './QuestionsItem'



const Hadja = () => {

    const [listquestions, setListQuestions] = useState([])


    useEffect(() => {
        axios.get('https://back.umra.kg/api/v1/questions/').then((res) => {
            setListQuestions(res.data.results)
        })
    }, [])


    return (
        <div className={styles.Hadja}>
            <div className={styles.container}>
                <div className="Hadja__head__text">
                    <div className={styles.hadja__top_title}>
                        Достоинства Хаджа
                    </div>
                    <div className={styles.hadja__inside}>
                        <div className={styles.left__hadja}>
                            <Image src={hadja} alt='/' />
                        </div>
                        <div className={styles.right__hadja}>
                            Хадж – это обязательно паломничество мусульман, которое сродни ежегодному конгрессу уверовавших со всего мира. Хадж несёт в себе огромную пользу как мирскую, так и религиозную (духовную). О достоинствах паломничество повествуется в хадиса Пророка Мухаммада. Предлагаем вниманию читателей 24 таких изречений.
                        </div>
                    </div>
                </div>
            </div>

            <div className='max__container'>
                <div className={styles.often__ask__questions}>
                    <div className={styles.container}>
                        <div className={styles.often__ask__text}>
                            Часто задаваемые вопросы
                        </div>

                    </div>
                </div>
                <div className={styles.container}>

                    <div className="Questions">
                        <div className={styles.answer_wrapper}>
                            <div className={styles.answer_wrapper__inside}>
                                {
                                    listquestions.map((question: any, index: any) => <QuestionsItem question={question} key={index} index={index} />)
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hadja
