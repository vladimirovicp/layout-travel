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