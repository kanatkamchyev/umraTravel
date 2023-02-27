import Link from 'next/link'
import React from 'react'
import FooterIcon from '../../public/imgs/Vector-4.svg'
import Image from 'next/image'



type Props = {}

const Footer = (props: Props) => {
  return (
    <div className="footer">
    <div className="container">
      <div className="footer-wrapper">
        <div className="all__footer">
          <div className="top-side__footer">
            <div className="left-side__footer">
              <div className="left__footer">
                <Link href='/' className="footer__icon" id="1">
                  <Image src={FooterIcon} alt="/"/>
                </Link>
                <div className="footer__meriden">
                  <div className="top__text">Курманжан датка 413,</div>
                  <div className="top__text">г. Ош</div>
                  <div className="bottom__footer">
                    <div className="left-bottom__footer">
                      <div className="number">
                        <a href="tel:+996554072525"> +996 (554) 072 525</a>
                      </div>
                      <div className="gmail-contact">
                        <a href="mailto:contact@Zamzam.kg"> contact@Zamzam.kg</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right__footer">
                <div className="footer__nav-bar">
                  <div className="bar__about-us">
                    <ul>
                      <Link href='/'><li>Главная</li></Link>
                      <Link href='/about'><li>Про нас</li></Link>
                      <Link href='/Ajys'><li>Ажи-Баши</li></Link>
                      <Link href='/contact'> <li>Контакты</li></Link>
                    </ul>
                  </div>
                  <div className="bar__online-contacts">
                    <ul>
                      <a href="">  <li>Facebook</li></a>
                      <a href="https://instagram.com/zamzam_travel.osh?igshid=Yzg5MTU1MDY="> <li>Instagram</li></a>
                      <a href="https://t.me/AlimovTILLO"><li>Telegram</li></a>
                      <a href="https://wa.me/996554072525">  <li>Whatsapp</li></a>
                    
                     
                      
                    
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="right-bottom__footer">
            <div className="maket-name">
              <div className="zamzamerinhis">
                  ZamZam
              © {new Date().getFullYear()}
              </div>
            
              
              <a href="#">@ PROlab LLC</a>
              <div className="prolabhref">
              . Все права защищены. {" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Footer