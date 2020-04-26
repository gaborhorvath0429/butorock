import React, { useState } from 'react'
import './Header.scss'
import { Link } from "react-scroll"

let Header = () => {
  let [hidden, setHidden] = useState(true)
  window.addEventListener('scroll', () => setHidden(window.scrollY === 0 ? true : false))

  let logo = <Link className="link" smooth={'easeInOutQuint'} duration={700} to={'Home'}><div className="logo">Logo</div></Link>

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
        <span className="contact">email: akármi@valami.hu, telefon: +36301234567</span>
      </div>
    </div>
  )
}

export default Header