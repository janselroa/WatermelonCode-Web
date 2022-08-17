export const mobileNav = () => {
  const menuBtn: HTMLElement | null = document.querySelector<HTMLElement>('.nav__btn')
  const closeBtn: HTMLElement | null = document.querySelector<HTMLElement>('.close-btn')
  const menu: HTMLElement | null = document.querySelector<HTMLElement>('.nav ul')
  const navLinks: NodeListOf<HTMLElement> = document.querySelectorAll<any>('.menu__link')
  menuBtn?.addEventListener('click', () => menu?.classList.toggle('showMenu'))
  closeBtn?.addEventListener('click', () => menu?.classList.remove('showMenu'))

  navLinks.forEach((element: HTMLElement) => {
    element.addEventListener('click', () => menu?.classList.remove('showMenu'))
  })
}
