let randBtn = document.querySelector('#color')



const randRest = evt =>{
    alert('Random')
}

colorBtn.addEventListener('click',randRest)


const mouse = evt =>{
    evt.target.classList.toggle('btnMouse')
}
randBtn.addEventListener('mouseover',mouse)
randBtn.addEventListener('mouseout',mouse)