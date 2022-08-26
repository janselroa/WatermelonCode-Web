import './scss/index.scss'
import { changeImage } from './ts/changeImage'
import { countEffect } from './ts/countEffect'
import { mobileNav } from './ts/navLogic'
import { animationInMobile } from './ts/subtitleAnimationsInMobile'

changeImage(document.querySelector<any>('.image1'), ['logo.png', 'image.png', 'image2.png'])
changeImage(document.querySelector<any>('.image2'), [
  'image3.png',
  'image4.png',
  'taller1.png',
  'image5.png',
])

mobileNav()
animationInMobile()
let options = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0
}
const counterDiv = document.querySelector<HTMLElement>(".counter") as HTMLElement
let observer = new IntersectionObserver(countEffect, options);
observer.observe(counterDiv)
