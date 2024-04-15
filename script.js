const hamburger = document.querySelector('.navbar button');
const navMenu = document.querySelector('.navbar .nav-menu');

function openMenu(){
    navMenu.classList.toggle('active');

    if(navMenu.classList.contains('active')){
        hamburger.innerHTML = `<img src="img/close.png" alt="image-close">`;

    }else{
        hamburger.innerHTML = `<img src="img/menu.png" alt="menu">`
    }


}
