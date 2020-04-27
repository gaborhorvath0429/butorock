import React, { useContext } from 'react'
import './Products.scss'
import { GalleryImages } from '../App'
import { Link } from "react-scroll"

let Products = () => {
  const { setImages } = useContext(GalleryImages)

  let categories = [ // https://www.flaticon.com/free-icon/sofa_2789633?term=sofa&page=1&position=21
    { text: 'Asztalok és székek', icon: 'images/products/icons/desk.png', images: importAll(require.context('../images/products/categories/asztalok', true, /\.(png|jpe?g)$/)) },
    { text: 'Előszoba bútorok', icon: 'images/products/icons/cabinet.png', images: importAll(require.context('../images/products/categories/eloszobabutorok', true, /\.(png|jpe?g)$/)) },
    { text: 'Fabútorok', icon: 'images/products/icons/wood.png', images: importAll(require.context('../images/products/categories/fabutorok', true, /\.(png|jpe?g)$/)) },
    { text: 'Fotelágyak', icon: 'images/products/icons/sofa.png', images: importAll(require.context('../images/products/categories/fotelagyak', true, /\.(png|jpe?g)$/)) },
    { text: 'Franciaágyak', icon: 'images/products/icons/bed.png', images: importAll(require.context('../images/products/categories/franciaagyak', true, /\.(png|jpe?g)$/)) },
    { text: 'Fürdőszoba', icon: 'images/products/icons/bathroom.png', images: importAll(require.context('../images/products/categories/furdoszobak', true, /\.(png|jpe?g)$/)) },
    { text: 'Ülőgarnitúrák', icon: 'images/products/icons/chair.png', images: importAll(require.context('../images/products/categories/ulogarniturak', true, /\.(png|jpe?g)$/)) },
    { text: 'Gyerekszoba bútorok', icon: 'images/products/icons/child.png', images: importAll(require.context('../images/products/categories/gyerekszobak', true, /\.(png|jpe?g)$/)) },
    { text: 'Heverők', icon: 'images/products/icons/single.png', images: importAll(require.context('../images/products/categories/heverok', true, /\.(png|jpe?g)$/)) },
    { text: 'Irodabútorok', icon: 'images/products/icons/workplace.png', images: importAll(require.context('../images/products/categories/irodabutorok', true, /\.(png|jpe?g)$/)) },
    { text: 'Kanapék', icon: 'images/products/icons/sofa2.png', images: importAll(require.context('../images/products/categories/kanapek', true, /\.(png|jpe?g)$/)) },
    { text: 'Kiegészítők', icon: 'images/products/icons/home.png', images: importAll(require.context('../images/products/categories/kiegeszitok', true, /\.(png|jpe?g)$/)) },
    { text: 'Konyhabútorok', icon: 'images/products/icons/kitchen.png', images: importAll(require.context('../images/products/categories/konyhabutorok', true, /\.(png|jpe?g)$/)) },
    { text: 'Sarokgarnitúrák', icon: 'images/products/icons/couch.png', images: importAll(require.context('../images/products/categories/sarokgarniturak', true, /\.(png|jpe?g)$/)) },
    { text: 'Szekrénysorok', icon: 'images/products/icons/closet.png', images: importAll(require.context('../images/products/categories/szekrenysorok', true, /\.(png|jpe?g)$/)) },
    { text: 'Tálalószekrények', icon: 'images/products/icons/wardrobe.png', images: importAll(require.context('../images/products/categories/talaloszekrenyek', true, /\.(png|jpe?g)$/)) },
    { text: 'Tolóajtós szekrények', icon: 'images/products/icons/closet2.png', images: importAll(require.context('../images/products/categories/toloajtosszekrenyek', true, /\.(png|jpe?g)$/)) },
  ]

  let toggleActive = () => {
    document.getElementById("Termékek").style.backgroundImage = 'url(images/products/backgrounds/' + Math.floor(Math.random() * 3 + 1) + '.jpg)'
  }

  let onCategoryClick = (category) => {
    setImages(category.images.map(image => ({ src: image, width: 1, height: 1, caption: '' })))
  }

  let categoriesRef = React.createRef()

  let sideScroll = (element,direction,speed,distance,step) => {
    let scrollAmount = 0;
    var slideTimer = setInterval(() => {
      if(direction === 'left'){
        element.scrollLeft -= step;
      } else {
        element.scrollLeft += step;
      }
      scrollAmount += step;
      if(scrollAmount >= distance){
        window.clearInterval(slideTimer);
      }
    }, speed);
  }

  let vw = (v) => {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    return (v * w) / 100
  }

  function importAll(r) {
    return r.keys().map(r)
  }

  return (
    <div className="products" id="Termékek">
      <div className="categories" ref={categoriesRef}>
        {categories.map(category => (
          <Link key={category.text} className="link" smooth={'easeInOutQuint'} duration={700} to={'Galéria'}>
            <div className="category" onMouseEnter={toggleActive} onClick={() => onCategoryClick(category)}>
              <img alt='' src={category.icon}/>
              <div className="title">{category.text}</div>
            </div>
          </Link>
        ))}
      </div>
      <div className="arrow-left" onClick={() => sideScroll(categoriesRef.current,'left',5,vw(30),5)}>
        <img alt='' src={'images/products/icons/left.png'}/>
      </div>
      <div className="arrow-right" onClick={() => sideScroll(categoriesRef.current,'right',5,vw(30),5)}>
        <img alt='' src={'images/products/icons/right.png'}/>
      </div>
    </div>
  )
}

export default Products