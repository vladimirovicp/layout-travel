const swiper = new Swiper('.destinations__swiper', {
    loop: true,
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    centeredSlides: true,
    watchSlidesVisibility: true,

    breakpoints: {
        '320': {
            slidesPerView: 1,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        },
        '1119': {
            slidesPerView: 1,
        },
        '1200': {
            slidesPerView: 1.8,
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
