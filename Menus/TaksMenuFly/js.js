    
let list = document.querySelectorAll('.navigation li')
console.log(list)

function activeLink() {
    list.forEach(item => item.classList.remove('active'))
    this.classList.add('active')
}

list.forEach(item => item.addEventListener('click', activeLink))

//video: 9:52   
//video: https://www.youtube.com/watch?v=aX9mMaSlkBE  