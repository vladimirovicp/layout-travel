const swiper = new Swiper('.destinations__swiper', {
    loop: true,
    slidesPerView: 1.68,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    centeredSlides: true,
    watchSlidesVisibility: true,

   // Свободнфй режим
   //  freeMode: true,
});