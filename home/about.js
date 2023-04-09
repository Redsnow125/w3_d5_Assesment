console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	console.log('form submit');
	alert('Form has been submitted')
}
const compliment = (evt) =>{
	alert("You look very rubbery :D")
}




let form = document.querySelector('#contact');
let pic = document.querySelector('img');

form.addEventListener('submit', handleSubmit);
pic.addEventListener('mouseover', compliment);