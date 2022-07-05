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

        '768': {
            slidesPerView: 1.68,
        },

        '1440': {
            slidesPerView: 1.68,
        },
    }

   // Свободнфй режим
   //  freeMode: true,
});


const menu = document.querySelector('.menu__icon');
const menuClose = document.querySelector('.menu__close');
let menuContent = document.querySelector('#main-menu');

const menuLinks = menuContent.querySelectorAll('.header__nav-link');

if(menu){
    menu.addEventListener("click", function (e){
        // console.log(e.target.className);
        document.body.classList.toggle('_lock');
        menuContent.classList.add('_active');

        document.onclick = function (e) {
            // console.log(e.target.className);
            //
            // if (e.target.className != "header__nav-list nav-list" && e.target.className != "nav header__nav _active") {
            //     console.log('1');
            // }

            if(e.target.className == "_lock"){
                menuContent.classList.remove('_active')
                document.body.classList.remove('_lock');
            }
        };
    })
}

if(menuClose){
    menuClose.addEventListener("click", function (e){
        menuContent.classList.remove('_active')
        document.body.classList.remove('_lock');
    })
}

// console.log(menuLinks.length);

if (menuLinks.length > 0){
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });
    function onMenuLinkClick(e){
        // const menuLink = e.target;
        menuContent.classList.remove('_active');
        document.body.classList.remove('_lock');
    }

}






// let body = document.querySelector('body');
//
// body.addEventListener('click', function (e) {
//
//     console.log('111');
//
//
//     if (e.offsetX < 0) {
//         console.log('before');
//     }
//     if (e.offsetX > 200) {
//         console.log('after');
//     }
// })


