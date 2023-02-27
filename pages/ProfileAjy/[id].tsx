import React from 'react'
import ProfileAjy from '../../components/AjyProfile/ProfileAjy'
import NavBar from '../../components/NavBar/Nav-Bar'
import styles from '../../styles/ajyprofile.module.css'


export const getStaticPaths = async () => {
    const res = await fetch('https://back.umra.kg/api/v1/accounts/users/');
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
    const res = await fetch(`https://back.umra.kg/api/v1/accounts/users/${id}`);
    const data = await res.json();
    console.log(data)
  
    return {
        props: {
            user: data
        }
    }
  }

  
  type Props = {
    user:any,
  }


const AjyProfile = ({user}: Props) => {

  
  return (
    <div className='AjyProfile' id='AjyProfile'>
        <div className="max__container">
            <div className={styles.background__profileAjy}>
                <NavBar/>
            </div>
            <div className="inside__ajyProfile">
                <div className="container">
                    <ProfileAjy user={user}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AjyProfile
