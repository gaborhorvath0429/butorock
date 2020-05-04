import React, { useContext, useState, useCallback } from 'react'
import './Gallery.scss'
import { LightboxOpen } from '../App'
import { GalleryImages } from '../App'
import Gallery from "react-photo-gallery"
import Carousel, { Modal, ModalGateway } from "react-images"
import { Link } from "react-scroll"

let ImageGallery = () => {
  const { lightboxOpen, toggleLightBox } = useContext(LightboxOpen)
  const [ currentImage, setCurrentImage ] = useState(0)
  const { images } = useContext(GalleryImages)

  const [ showButton, setShowButton ] = useState(isVisible(document.getElementById('Galéria')))

  window.addEventListener('scroll', () => setShowButton(isVisible(document.getElementById('Galéria'))))

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index)
    toggleLightBox({ type: 'open' })
  }, [toggleLightBox]);

  return (
    <div className="gallery" id="Galéria">
      {images.length ? (<Gallery photos={images} onClick={openLightbox} />) : null}
      <ModalGateway>
        {lightboxOpen ? (
          <Modal onClose={() => toggleLightBox({ type: 'close' })}>
            <Carousel
              currentIndex={currentImage}
              views={images}
            />
          </Modal>
        ) : null}
      </ModalGateway>
      {showButton ? (
        <Link className="backToCategories" spy={true} smooth={'easeInOutQuint'} offset={-50} duration={700} to={'Termékek'}>Vissza a kategóriákhoz</Link>
      ) : null}
    </div>
  )
}

function isVisible(el){
  if (!el) return false
  var rect = el.getBoundingClientRect(), top = rect.top, height = rect.height, 
    el = el.parentNode
  // Check if bottom of the element is off the page
  if (rect.bottom < 0) return false
  // Check its within the document viewport
  if (top > document.documentElement.clientHeight) return false
  do {
    rect = el.getBoundingClientRect()
    if (top <= rect.bottom === false) return false
    // Check if the element is out of view due to a container scrolling
    if ((top + height) <= rect.top) return false
    el = el.parentNode
  } while (el != document.body)
  return true
};

export default ImageGallery