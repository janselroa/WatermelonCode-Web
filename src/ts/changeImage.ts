// TODO: change types

// TODO: compress the images (are so big)

export const changeImage = (element: any, images: string[]): void => {
  console.log(element)

  let i = 0
  setInterval(() => {
    element.classList.add('animation')
    setTimeout(() => {
      element.classList.remove('animation')
    }, 500)
    if (i >= images.length) i = 0
    element.src = `../assets/img/${images[i]}`
  }, 5000)
}
