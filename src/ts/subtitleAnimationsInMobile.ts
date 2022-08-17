export const animationInMobile = () => {
  const subtitles = document.querySelectorAll('.subtitle')

  if (screen.availWidth < 729) {
    subtitles.forEach((sub) => sub.setAttribute('data-aos', 'fade-up'))
    return
  }

  subtitles.forEach((sub) => sub.setAttribute('data-aos', 'fade-left'))
}
