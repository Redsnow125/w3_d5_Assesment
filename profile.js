
let colorBtn = document.querySelector('#color')
let placeBtn = document.querySelector('#place')
let ritualBtn = document.querySelector('#ritual')
let skillsList = document.querySelector('ulSkills')
let careerList = document.querySelector('#career-list')
let skillPic = document.querySelector('#skillPic')

const addCareer = evt =>{
    evt.preventDefault()
    let inputFeild = document.querySelector('#newcareerinput')
    let newCareer = document.createElement('p')
    let list = document.querySelector('#career-list')
    newCareer.textContent = inputFeild.value;
    list.appendChild(newCareer)
    inputFeild.value = '';
}
let careerForm = document.querySelector('#newCareer')
careerForm.addEventListener('submit',addCareer)




const color = evt =>{
    alert('My favorite color is purple')
}
const place = evt =>{
    alert('My favorite place is lake tahoe')
}
const ritual = evt =>{
    alert('My favorite ritual is index swearing with my wife')
}

colorBtn.addEventListener('click',color)
placeBtn.addEventListener('click',place)
ritualBtn.addEventListener('click',ritual)

const mouse = evt =>{
    evt.target.classList.toggle('btnMouse')
}
colorBtn.addEventListener('mouseover',mouse)
colorBtn.addEventListener('mouseout',mouse)
placeBtn.addEventListener('mouseover',mouse)
placeBtn.addEventListener('mouseout',mouse)
ritualBtn.addEventListener('mouseover',mouse)
ritualBtn.addEventListener('mouseout',mouse)



const code = evt =>{
    skillPic.classList.toggle('codeImg')
}
const auto = evt =>{
    skillPic.classList.toggle('autoImg')
}
const build = evt =>{
    skillPic.classList.toggle('buildImg')
}
const demo = evt =>{
    skillPic.classList.toggle('demoImg')
}


document.querySelector('#code').addEventListener('mouseover',code)
document.querySelector('#code').addEventListener('mouseout',code)
document.querySelector('#auto').addEventListener('mouseover',auto)
document.querySelector('#auto').addEventListener('mouseout',auto)
document.querySelector('#build').addEventListener('mouseover',build)
document.querySelector('#build').addEventListener('mouseout',build)
document.querySelector('#demo').addEventListener('mouseover',demo)
document.querySelector('#demo').addEventListener('mouseout',demo)