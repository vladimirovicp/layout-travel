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

//Popup

let popupBg = document.querySelector('.popup__bg'); // Фон попап окна
let loginPopUp = document.querySelector('.loginPopUp'); // Само окно loginPopUp
let openPopupButtonslogin = document.querySelectorAll('.open-popup-login'); // Кнопки для показа окна

let signUpPopUp = document.querySelector('.signUpPopUp');
let openPopupButtonsSignUp = document.querySelectorAll('.open-popup-signUp'); // Кнопки для показа окна


openPopupButtonslogin.forEach((button) =>{
    button.addEventListener('click', (e) => {
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        signUpPopUp.classList.remove('active');
        popupBg.classList.add('active'); // Добавляем класс 'active' для фона
        loginPopUp.classList.add('active'); // И для самого окна
        document.body.classList.add('_lock');
    })
})

openPopupButtonsSignUp.forEach((button) =>{
    button.addEventListener('click', (e) => {
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupBg.classList.add('active'); // Добавляем класс 'active' для фона
        signUpPopUp.classList.add('active'); // И для самого окна
        loginPopUp.classList.remove('active');
        document.body.classList.add('_lock');
    })
})

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === popupBg) { // Если цель клика - фот, то:
        popupBg.classList.remove('active'); // Убираем активный класс с фона
        loginPopUp.classList.remove('active');
        signUpPopUp.classList.remove('active');
        document.body.classList.remove('_lock');
    }
});



let loginPopUpSignIn = document.querySelectorAll('.loginPopUp__signIn');
loginPopUpSignIn.forEach((button) =>{
    button.addEventListener('click', (e) => {
        let loginPopUpEmail = loginPopUp.querySelector('.loginPopUp__email');
        let loginPopUpPassword = loginPopUp.querySelector('.loginPopUp__password');
        alert(`Вы ввели: \n Почта: `  + loginPopUpEmail.value  + `\n Пароль: ` + loginPopUpPassword.value);
    })
});

let signUpPopUpSignIn = document.querySelectorAll('.signUpPopUp__signIn');
signUpPopUpSignIn.forEach((button) =>{
    button.addEventListener('click', (e) => {
        let createPopUpEmail = signUpPopUp.querySelector('.signUpPopUp__email');
        let createPopUpPassword = signUpPopUp.querySelector('.signUpPopUp__password');
        alert(`Вы ввели: \n Почта: `  + createPopUpEmail.value  + `\n Пароль: ` + createPopUpPassword.value);
    })
});




