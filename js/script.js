const swiper = new Swiper('.destinations__swiper', {
    loop: true,
    slidesPerView: 1.8,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    centeredSlides: true,
    watchSlidesVisibility: true,

    breakpoints: {
        '480': {
            slidesPerView: 1,
        },
    }

   // Свободнфй режим
   //  freeMode: true,
});


const menu = document.querySelector('.menu__icon');
const menuClose = document.querySelector('.menu__close');
const menuContent = document.querySelector('#main-menu');

if(menu){
    menu.addEventListener("click", function (e){
        menuContent.classList.add('_active')
    })
}

if(menuClose){
    menuClose.addEventListener("click", function (e){
        menuContent.classList.remove('_active')
    })
}
