import React, { useReducer } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Header from './components/Header'
import Home from './views/Home'
import About from './views/About'
import Products from './views/Products'
import ImageGallery from './views/Gallery'
import Contact from './views/Contact'
import Szechenyi from './views/Szechenyi'

function importAll(r) {
  return r.keys().map(r)
}

function lightboxReducer(state, action) {
  switch (action.type) {
    case 'open':
      return true;
    case 'close':
      return false;
    default:
      throw new Error()
  }
}

function imagesReducer(state, images) {
  return images
}

export const LightboxOpen = React.createContext()
export const GalleryImages = React.createContext()

let App = () => {
  const [ lightboxOpen, toggleLightBox ] = useReducer(lightboxReducer, false)
  const [ images, setImages ] = useReducer(imagesReducer, importAll(require.context('./images/products/categories/konyhabutorok', true, /\.(png|jpe?g|JPE?G)$/)).map(image => ({ src: image, width: 1, height: 1, caption: '' })))
  return window.matchMedia("(max-width: 768px)").matches ?
  (
    <LightboxOpen.Provider value={{ lightboxOpen, toggleLightBox }}>
    <GalleryImages.Provider value={{ images, setImages }}>
      <Router>
        <Header/>
        <Products/>
        <ImageGallery/>
        <About/>
        <Contact/>
      </Router>
    </GalleryImages.Provider>
    </LightboxOpen.Provider>
  ) :
  (
    <LightboxOpen.Provider value={{ lightboxOpen, toggleLightBox }}>
      <GalleryImages.Provider value={{ images, setImages }}>
        <Router>
          <Header/>
          <Home/>
          <About/>
          <Contact/>
          <Szechenyi/>
          <Products/>
          <ImageGallery/>
        </Router>
      </GalleryImages.Provider>
    </LightboxOpen.Provider>
  )
}

export default App
