import React from 'react'
import Image from 'next/image'
import Default from '../../public/imgs/user_default.svg'
import Link from 'next/link'


type Props = {
    item: any
}


const Ajybox = ({ item }: Props) => {
    console.log(item);

    return (
        <div className='Ajy__box'>
            <div className="inside__ajyBox">
                <div className="image__ajy_avatar">
                    {/* {
                        avatar?(
                            <Image width={160} height={160} src={avatar} alt='/' />
                            )
                            :
                           ( 
                           <Image width={160} height={160} src={Default} alt='/' />
                           )
                    } */}
                            <Image src={Default} alt='/' />

                </div>
                <div className="name__ajy_use">
                    {item.first_name}
                </div>
                <div className="ajy__bashy_signiture">
                    Ажи-Баши
                </div>
                <div className="btn__toShow-prof">
                    <Link href={`ProfileAjy/${item.id}`}>
                     <button>
                        Посмотреть профиль
                    </button>
                    </Link>
                   
                </div>
            </div>
        </div>
    )
}

export default Ajybox
