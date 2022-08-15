const counter = document.querySelector(".miembros")
let contador=1000
const interval = setInterval(()=>{
    contador++
    counter.textContent=contador
    if(contador>1250){
        clearInterval(interval)
    }
},0)