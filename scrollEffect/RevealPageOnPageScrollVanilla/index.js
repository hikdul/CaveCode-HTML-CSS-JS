
//  -- para crear los elementos
for(let i = 1 ; i < 60; i++)
{
    let box = document.createElement('div')
    box.classList.add('box')
    document.querySelector('.container').appendChild(box)
}
// -- generar colores aleatorios
let randowColorBlock = document.querySelectorAll('.box')
function ranColor() {
    const chars = '1234567890abcdef'
    const colorLength = 6
    let color = ''
    
    for(let i = 0; i <= colorLength; i++)
    {
        let ranColor = Math.floor(Math.random() * chars.length);
        color += chars.substring(ranColor, ranColor+1);
    }
    return '#'+color
}

const addColorToBox = () => randowColorBlock.forEach(caja =>{ caja.style.background = ranColor() })

// -- obtengo mis elementos
let boxes  = document.querySelectorAll('.box')
// -- funcion que se ejecuta con el evento
function scrollTrigger()
{
    boxes.forEach( b =>{
        if(b.offsetTop < window.scrollY)
        {
            b.classList.add('active')
        }
        else
        {
            b.classList.remove('active')
        }
    })
}

addColorToBox()
// -- y activamos nuestro efecto
window.addEventListener('scroll',  scrollTrigger)

