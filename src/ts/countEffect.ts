export function countEffect(): void {
  const counter: HTMLElement = document.querySelector<HTMLElement | any>('.miembros')
  let contador = 1000
  const interval = setInterval(() => {
    contador++
    counter.textContent = contador.toString()
    if (contador > 1250) {
      clearInterval(interval)
    }
  }, 0)
}
