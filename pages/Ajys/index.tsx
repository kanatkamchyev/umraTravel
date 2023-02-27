import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Ajybox from '../../components/AjyBox/Ajybox'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/Nav-Bar'

const AjyPage = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('https://back.umra.kg/api/v1/accounts/users/').then((res) => {
      setUsers(res.data.results)
    })
  }, [])

  console.log(users);



  return (
    <div className='Ajy-page'>
      <div className="max__container">
        <div className="inside__ajys__bashy">
          <div className="background__ajys__usimage">
            <div className="nav__bar__ajys__us">
              <NavBar />
            </div>
          </div>
          <div className="container">

            <div className="head__text__ajyTitle">
              Наши Ажи-Баши
            </div>
            <div className="main__body__ajy-bashy">
              {
                users.map((item: any) => item.role === 4 ? <Ajybox item={item} /> : null)
              }
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AjyPage
