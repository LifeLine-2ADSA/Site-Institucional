let isNavbarOpen = false;

function navbar() {
 let navbar = document.getElementById('navbar');
 let imageMenu = document.getElementById('imageMenu');
 console.log(navbar)
 if(isNavbarOpen) {
  navbar.classList.remove('itensHeaderOpen')
  navbar.classList.add('itensHeaderClose')
  imageMenu.setAttribute('src', './assets/images/menu.svg')
 } else {
  navbar.classList.remove('itensHeaderClose')
  navbar.classList.add('itensHeaderOpen')
  imageMenu.setAttribute('src', './assets/images/close.svg')
 }

 isNavbarOpen = !isNavbarOpen;
}