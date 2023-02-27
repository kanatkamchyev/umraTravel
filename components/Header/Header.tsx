import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from '../../styles/header.module.css'
import logo from '../../public/imgs/logo-zamcgik.svg'
import { ClearSearch, DataFilter, PriceFilter, SearchFilter, TourFilter, UserFilter } from '../../assets/svg/SVG'
import Select from 'react-select'
import MainNavs from '../MainNavbar/MainNavs'
import axios from 'axios'



const priceOption = [
  { id: 1, value: '800', label: '800$' },
  { id: 2, value: '1000', label: '1000$' },
  { id: 3, value: '1200', label: '1200$' },
  { id: 4, value: '1400', label: '1400$' },
  { id: 5, value: '1800', label: '1800$' },
  { id: 6, value: '2200', label: '2200$' },
]


const defaultState = {
  date: ['', ''],
  category: '',
  price__gt: '',
  price__lt: '',
  user: ''
}



export default function Header() {

  const [query, setQuery] = useState(defaultState)

  const [users, setUsers] = useState([])
  const [category, setCategory] = useState([])

  useEffect(() => {
    axios.get('https://back.umra.kg/api/v1/accounts/users/').then((res) => {
      setUsers(res.data.results)
    })
    axios.get('https://back.umra.kg/api/v1/tours/categories/').then((res) => {
      setCategory(res.data.results)
    })

    function fetch(query = {
      flight_date_min: '',
      flight_date_max: '',
      category: '',
      price__gt: '',
      price__lt: '',
      user: ''
    }) {
      axios.get(`https://back.umra.kg/api/v1/tours/?flight_date_min=${query.flight_date_min}&flight_date_max=${query.flight_date_max}&category=${query.category}&user=${query.user}&price__lt=${query.price__lt}&price__gt=${query.price__gt}`)
    }
  }, [])

  console.log(category);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('data', query)
    axios.post(`https://back.umra.kg/api/v1/tours/?flight_date_min=${query.flight_date_min}&flight_date_max=${query.flight_date_max}&category=${query.category}&user=${query.user}&price__lt=${query.price__lt}&price__gt=${query.price__gt}`, ({
      flight_date_min: query.date[0].constructor === Date ? query.date[0] : '',
      flight_date_max: query.date[1].constructor === Date ? query.date[1] : '',
      category: query.category.value ? query.category.value : '',
      price__gt: query.price__gt.value ? query.price__gt.value : '',
      price__lt: query.price__lt.value ? query.price__lt.value : '',
      user: query.user.value ? query.user.value : '',
    }))

  }

  const handleReset = () => {
    setQuery(defaultState)
    axios.get('https://back.umra.kg/api/v1/tours/?flight_date_min=&flight_date_max=&category=&user=&is_published=&price__gt=&price__lt=').then((res) => {

    })
  }


  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      border: 'none',
      borderRadius: 0,
      boxShadow: 'none',
    }),
  }

  const handleSet = (data: any, name: any) => {
    console.log('name', data, name);
    setQuery({
      ...query,
      [name]: data
    })
  }



  let index = priceOption.filter((item) => item.id !== 1);

  const AjyUsers = users.filter((man: any) => man.role === 4)


  return (
    <div className='Header'>
      <div className={styles.giff__background}>
        <div className={styles.right__gif__side}>

        </div>
        <div className={styles.header__navbar}>
          <MainNavs />
        </div>
      </div>

      <div className={styles.left__blue_side}>
        <div className={styles.inside__blue__back}>
          <div className={styles.blue__logo}>
            <Image src={logo} alt='/' />
          </div>
          <div className={styles.hot__present__text}>
            Проведи Рамадан в Мекке

          </div>
          <div className={styles.hot__present__text1}>
            Умра во время Рамадан
            Специальные пакеты Умра от 1350$!
          </div>
          <div className={styles.btn__hot__present}>
            <button className={styles.hot__present}>
              Горячие предложения
            </button>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.box__center__filter}>
          <div className={styles.inside__filtered__box}>
            <div className={styles.filter__select}>
              <div className={styles.filter__top__select}>
                <DataFilter />
                <p> Дата вылета</p>
              </div>
              <div className={styles.filter__bottom__select}>

              </div>
            </div>
            <div className={styles.filter__select}>
              <div className={styles.filter__top__select}>
                <TourFilter />
                <p>  Тур пакет</p>

              </div>
              <div className={styles.filter__bottom__select}>
                <Select
                  name='category'
                  styles={customStyles}
                  placeholder='Выберите тур'
                  className={styles.select_filter}
                  options={
                    category.map((medal: any) => {
                      return {
                        label: medal.title,

                      }
                    })
                  }
                  defaultValue={query.category}
                  value={query.category}
                  onChange={e => handleSet(e, 'category')}

                />
              </div>
            </div>
            <div className={styles.filter__select}>
              <div className={styles.filter__top__select}>
                <PriceFilter />
                <p>  Цена</p>

              </div>
              <div className={styles.filter__bottom__select}>
                <Select
                  name='price__gt'
                  placeholder='800$'
                  isSearchable={false}
                  options={priceOption}
                  styles={customStyles}
                  value={query.price__gt}
                  className={styles.price_select}
                  onChange={e => handleSet(e, 'price__gt')}

                />
                -
                <Select
                  name='price__lt'
                  placeholder='2200$'
                  isSearchable={false}
                  options={index}
                  styles={customStyles}
                  value={query.price__lt}
                  className={styles.price_select}
                  onChange={e => handleSet(e, 'price__lt')}

                />
              </div>
            </div>
            <div className={styles.filter__select}>
              <div className={styles.filter__top__select}>
                <UserFilter />
                <p> Ажи-Башы</p>

              </div>
              <div className={styles.filter__bottom__select}>
                <Select
                  name='user'
                  placeholder='Выберите Ажы'
                  styles={customStyles}
                  className={styles.select_filter}
                  defaultValue={query.user}
                  value={query.user}
                  options={
                    AjyUsers.map((human: any) => {
                      return {
                        label: human.first_name,
                        value: human.id
                      }
                    })
                  }
                  onChange={e => handleSet(e, 'user')}

                />
              </div>
            </div>
            <div className={styles.filter__select}>
              <div className={styles.filter__top__selects}>
                <div className={styles.searchFilterFind}>
                  <button onClick={handleSubmit} type='submit'>
                    <SearchFilter />
                  </button>
                </div>
              </div>
              {
                query.category || query.user || query.price__gt || query.price__lt || query.date[0] ?
                  <div className={styles.filter__bottom__selects} onClick={handleReset}>
                    <ClearSearch />
                    Очистить фильтр
                  </div>

                  :
                  ''

              }


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
