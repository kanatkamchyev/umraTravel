import React, { useState } from 'react'
import styles from '../../styles/hadja.module.css'
import Image from 'next/image'
import plus from '../../public/imgs/plus.svg'
import minus from '../../public/imgs/minus.svg'




interface Props {
    question: any;
    index: any
}

const QuestionsItem = ({ question, index }: Props) => {

    const [hiddenText, setHiddenText] = useState<any>(false)
    const hideText = (index: any) => {
        setHiddenText(index)
    }

    return (
        <div className={styles.QuestionsItem}>
            <div className={styles.container}>
                <div className={styles.inside__questionItem}>
                    <div className={styles.top__side__questionItem}>
                        <div className={styles.dolgo__reshal}>
                            <div className={styles.left__topside__qItem}>
                                {question.my_order}
                            </div>
                            <div className={styles.trip__title__quest} onClick={() => hideText(!hiddenText)}>
                                {question.title}
                            </div>
                        </div>
                        <div className={styles.right__side__qItem}>
                            <div className={hiddenText ? styles.add__icon__questItem_active : styles.add__icon__questItem} onClick={() => hideText(!hiddenText)}>
                                {
                                    hiddenText ?
                                        <Image src={minus} alt='/' />
                                        :
                                        <Image src={plus} alt='/' />

                                }
                            </div>
                        </div>
                    </div>
                    {
                        hiddenText ?
                            <div className={styles.inside__hidden__qItem}>
                                {question.description}
                            </div>
                            :
                            null
                    }
                </div>
            </div>

        </div>
    )
}

export default QuestionsItem;
