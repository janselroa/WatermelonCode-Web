import './scss/index.scss'
import { changeImage, mobileNav, animationInMobile, countEffect } from './ts/index'

// TODO:
animationInMobile()
mobileNav()
//countEffect()
changeImage(document.querySelector<HTMLImageElement>('.image1'), [
  'logo.png',
  'image.png',
  'image2.png',
])
changeImage(document.querySelector<HTMLImageElement>('.image2'), [
  'image3.png',
  'image4.png',
  'taller1.png',
  'image5.png',
])
