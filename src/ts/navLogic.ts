export const mobileNav = () => {
  const menuBtn: HTMLElement = document.querySelector<HTMLElement>('.nav__btn') as HTMLElement
  const closeBtn: HTMLElement = document.querySelector<HTMLElement>('.close-btn') as HTMLElement
  const menu: HTMLElement = document.querySelector<HTMLElement>('.nav ul') as HTMLElement
  const navLinks: NodeListOf<HTMLElement> = document.querySelectorAll<HTMLElement>('.nav__link')
  menuBtn?.addEventListener('click', () => menu?.classList.toggle('showMenu'))
  closeBtn?.addEventListener('click', () => menu?.classList.remove('showMenu'))

  navLinks.forEach((element: HTMLElement) => {
    element.addEventListener('click', () => menu?.classList.remove('showMenu'))
  })
}
