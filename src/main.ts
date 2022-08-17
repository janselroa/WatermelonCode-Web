import './scss/index.scss'
import { changeImage } from './ts/changeImage'
//import { countEffect } from './ts/countEffect'
import { mobileNav } from './ts/navLogic'
import { animationInMobile } from './ts/subtitleAnimationsInMobile'

//countEffect()
changeImage(document.querySelector<any>('.image1'), ['logo.png', 'image.png', 'image2.png'])
changeImage(document.querySelector<any>('.image2'), [
  'image3.png',
  'image4.png',
  'taller1.png',
  'image5.png',
])

mobileNav()
animationInMobile()
