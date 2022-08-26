export function countEffect(): void {
  const elements = [{
    selector:".miembros",
    maxNumber:1260,
    initialNumber:1000
  },
  {
    selector:".helpers",
    maxNumber:20,
    initialNumber:1
  }
  ,{
    selector:".eventos",
    maxNumber:25,
    initialNumber:2
  }
  ]
  for(let element of elements){
    const counter: HTMLElement = document.querySelector<HTMLElement>(element.selector) as HTMLElement
    let contador = element.initialNumber
    const interval = setInterval(() => {
      contador++
      counter.textContent = `+${contador.toString()}`
      if (contador > element.maxNumber) {
        clearInterval(interval)
      }
    }, 0)
  }
}
