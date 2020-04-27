import React, { useState } from 'react'
import './Header.scss'
import { Link } from "react-scroll"

let Header = () => {
  let [hidden, setHidden] = useState(true)
  window.addEventListener('scroll', () => setHidden(window.scrollY === 0 ? true : false))

  let logo = (
    <Link className="link" smooth={'easeInOutQuint'} duration={700} to={'Home'}>
      <div className="logo"><img width="40px" alt="" src="images/logo.png"/>
        Sütheő Bútor Kft.
      </div>
    </Link>
  )

  return (
    <div>
      <div className={"header" + (hidden || window.scrollY === 0 ? ' hidden' : '')}>
        {logo}
        <div className="links">
          <Link className="link" smooth={'easeInOutQuint'} duration={700} to={'Rólunk'}>Rólunk</Link>
          <Link className="link" smooth={'easeInOutQuint'} duration={700} to={'Galéria'}>Galéria</Link>
          <Link className="link" smooth={'easeInOutQuint'} duration={700} to={'Termékek'}>Termékek</Link>
          <Link className="link" smooth={'easeInOutQuint'} duration={700} to={'Kapcsolat'}>Kapcsolat</Link>
        </div>
      </div>
      <div className={"header" + (!hidden && window.scrollY !== 0 ? ' hidden' : '')}>
        {logo}
        <span className="contact">
          <a href="https://www.facebook.com/sutheobutor" rel="noopener noreferrer" target="_blank"><img alt="" width="40px" src="images/facebook.png"/></a>
          <a href="https://www.instagram.com/butorock.hu" rel="noopener noreferrer" target="_blank"><img alt="" width="40px" src="images/instagram.png"/></a>
          <a href="mailto:info@butorock.hu" rel="noopener noreferrer" target="_blank"><img alt="" width="40px" src="images/email.png"/></a>
          +36302162300
        </span>
      </div>
    </div>
  )
}

export default Header