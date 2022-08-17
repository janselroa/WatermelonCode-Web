import './scss/index.scss'
import { changeImage } from './ts/changeImage'
import { mobileNav } from './ts/navLogic'

changeImage(document.querySelector<any>('.image1'), ['logo.png', 'image.png', 'image2.png'])
changeImage(document.querySelector<any>('.image2'), [
  'image3.png',
  'image4.png',
  'taller1.png',
  'image5.png',
])

mobileNav()
