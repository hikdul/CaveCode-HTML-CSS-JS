
let container = document.querySelector('container')
let tileSize = 20
let imageSieze = 400
let rows = imageSieze / tileSize
let cols = imageSieze / tileSize

// !: create tiles for both images
for (let row = 0; row < rows; row++) 
    for (let col = 0; col < cols; col++) {
        let tile1 = document.createElement('div')
        tile1.classList.add('tile', 'img1')
        tile1.style.left = `${col * tileSize}px`
        tile1.style.top = `${row * tileSize}px`
        tile1.style.backgroundPosition = `${-col * tileSize}px ${-row * tileSize}px`
        
        let tile2 = document.createElement('div')
        tile2.classList.add('tile', 'img2')
        tile2.style.left = `${col * tileSize}px`
        tile2.style.top = `${row * tileSize}px`
        tile2.style.backgroundPosition = `${-col * tileSize}px ${-row * tileSize}px`
        
        let randomDelay = Math.random() * .8
        tile2.style.transitionDelay =  `${randomDelay}s`
        
        container.appendChild(tile1)
        container.appendChild(tile2)

    }
