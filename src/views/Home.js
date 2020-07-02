import React from 'react'
import './Home.scss'
import { Link } from "react-scroll"

let Home = () => {
  let images = {
    'Rólunk': 'images/homepage/rolunk.jpg',
    'Termékek': 'images/homepage/termekek.jpg',
    'Galéria': 'images/homepage/galeria.jpg',
    'Kapcsolat': 'images/homepage/kapcsolat.jpg'
  }

  return (
    <div className="home" id="Home">
      <div className="nav">
        {Object.keys(images).map(key => (
          <Link smooth={'easeInOutQuint'} duration={700} to={key} offset={key === 'Termékek' ? -50 : 0} key={key}><div className="item" style={{backgroundImage: `url(${images[key]})`}}>{ key }</div></Link>
        ))}
      </div>
      <Link smooth={'easeInOutQuint'} duration={700} to="szechenyi"><img className="infoblokk" src="images/infoblokk.png"/></Link>
      <div className="overlay"></div>
    </div>
  )
}

export default Home