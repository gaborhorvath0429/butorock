import React, { useState } from 'react'
import './Header.scss'
import { Link } from "react-scroll"

let Header = () => {
  let [hidden, setHidden] = useState(true)
  window.addEventListener('scroll', () => setHidden(window.scrollY === 0 ? true : false))

  let logo = (
    <Link className="link" smooth={'easeInOutQuint'} duration={700} to={'Home'}>
      <div className="logo"><img width="40px" alt="" src="images/logo.png"/>
        <span className="title">Sütheő Bútor Kft.</span>
      </div>
    </Link>
  )
  return window.matchMedia("(max-width: 768px)").matches ?
  (
    <div>
      <div className={"header"}>
        {logo}
        <div className="links">
          <Link className="link" smooth={'easeInOutQuint'} duration={700} to={'Rólunk'}>Rólunk</Link>
          <Link className="link" smooth={'easeInOutQuint'} offset={window.matchMedia("(max-width: 768px)").matches ? -50 : 0} duration={700} to={'Galéria'}>Galéria</Link>
          <Link className="link" smooth={'easeInOutQuint'} offset={-50} duration={700} to={'Termékek'}>Termékek</Link>
          <Link className="link" smooth={'easeInOutQuint'} offset={window.matchMedia("(max-width: 768px)").matches ? -50 : 0} duration={700} to={'Kapcsolat'}>Kapcsolat</Link>
        </div>
      </div>
    </div>
  ) :
  (
    <div>
      <div className={"header" + (hidden || window.scrollY === 0 ? ' hidden' : '')}>
        {logo}
        <div className="links">
          <Link className="link" smooth={'easeInOutQuint'} duration={700} to={'Rólunk'}>Rólunk</Link>
          <Link className="link" smooth={'easeInOutQuint'} offset={window.matchMedia("(max-width: 768px)").matches ? -50 : 0} duration={700} to={'Galéria'}>Galéria</Link>
          <Link className="link" smooth={'easeInOutQuint'} offset={-50} duration={700} to={'Termékek'}>Termékek</Link>
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