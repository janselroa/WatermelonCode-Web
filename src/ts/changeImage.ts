export const changeImage = (element: any, images: string[]): void => {
  console.log(element)

  let i = 0
  setInterval(() => {
    element.classList.add('animation')
    setTimeout(() => {
      element.classList.remove('animation')
    }, 500)
    if (i >= images.length) i = 0
    element.src = `./src/assets/img/${images[i]}`
    i += 1
  }, 5000)
}
