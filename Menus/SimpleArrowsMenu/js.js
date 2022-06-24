
let marker = document.querySelector('#marker')
let item = document.querySelectorAll('ul li a')

// change de indication position based in the target position
const indicator = e => {
    marker.style.top = `${e.offsetTop}px`
    marker.style.width = `${e.offsetWidth}px`
}

// creo el evento inicial el cual se dispara cada ves que ocurre un cambio
item.forEach(link=> {
    link.addEventListener('mouseover',e =>{
        indicator(e.target)
    })
})

