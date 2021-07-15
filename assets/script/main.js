const showMenu=document.querySelector('#mobile-menu')
const menuRender=document.querySelector('.navbar__menu')

showMenu.addEventListener('click',function(){
    showMenu.classList.toggle('is-active')
    menuRender.classList.toggle('active')
})