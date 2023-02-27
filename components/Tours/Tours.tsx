import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ToursThings from './ToursThings';
import styles from '../../styles/navbar.module.css'





const Tours = () => {
    const [tours, setTours] = useState<any>([]);


    useEffect(() => {
        axios.get('https://back.umra.kg/api/v1/tours/').then((res) => {
            setTours(res.data)
        })
    }, [])

// const TourFilter = tours.results.map((item:any) => item.is_archived === false && item.is_published === true)

// console.log(TourFilter);

    

    return (
        <div className='Tours'>
            {/* {
                tours.results.map((tour:any) => {
                    return(
                        <div className={styles.dsadsad}>
                            <h1>{tour.id}</h1>
                        </div>
                    )
                })
            } */}
        </div>
    )
}

export default Tours
