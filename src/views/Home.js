import React from 'react'
import './Home.scss'
import { Link } from "react-scroll"

let Home = () => {
  let images = {
    'Rólunk': require('../images/homepage/rolunk.jpg'),
    'Termékek': require('../images/homepage/termekek.jpg'),
    'Galéria': require('../images/homepage/galeria.jpg'),
    'Kapcsolat': require('../images/homepage/kapcsolat.jpg')
  }

  return (
    <div className="home" id="Home">
      <div className="nav">
        {Object.keys(images).map(key => (
          <Link smooth={'easeInOutQuint'} duration={700} to={key} key={key}><div className="item" style={{backgroundImage: `url(${images[key]})`}}>{ key }</div></Link>
        ))}
      </div>
      <div className="overlay"></div>
    </div>
  )
}

export default Home