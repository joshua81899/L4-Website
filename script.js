let menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')
menu.onclick = ()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open')
}
document.querySelector('#loginbtn').onclick = () =>{
    document.querySelector('.login-form').classList.toggle('active');
  }
  document.querySelector('#closeloginform').onclick = () =>{
    document.querySelector('.login-form').classList.remove('active');
  }

const popup = document.querySelector('.modalpop');
const close = document.querySelector('#close')
 window.onload = function(){

  setTimeout(function(){
    popup.style.display = "block"; },2000)
 }

 close.addEventListener('click', () => {popup.style.display = 'none';})

document.querySelector('#carticon').onclick = () =>{
  document.querySelector('.cartslide').classList.toggle('active');
}
document.querySelector('#closeloginform').onclick = () =>{
  document.querySelector('.cartslide').classList.remove('active');
  }