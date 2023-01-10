burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.navlist')
rightnav = document.querySelector('.rightnav')
imusic = document.querySelector('.imusic')



burger.addEventListener('click',()=>{
    rightnav.classList.toggle('v-list-resp');
    navlist.classList.toggle('v-list-resp');
    navbar.classList.toggle('h-nav-resp');
    imusic.classList.toggle('imusic-resp');

})