//Прелоадер
window.onload = function () {
    let preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
};




// Слайдер в заголовке
new Swiper('.header__slider', {
    loop: true,
    autoplay: {
        //пауза между прокруткой
        delay: 10000,
        //Заканчивать на последнем слайде
        stopOnLastSlide: false,
        //Отключить после ручного переключения
        disableOnInteraction: false
    },
    // скорость перелистывания слайдов
    speed: 800,
});



// Таб выбора мастеров
const tabNavItem = document.querySelectorAll('.tab-nav-item');
const tabContentItem = document.querySelectorAll('.tab_content');

tabNavItem.forEach(function (elem) {
    elem.addEventListener('click', activeTab);
})

function activeTab() {
    tabNavItem.forEach(function (elem) {
        elem.classList.remove('active');
    })
    this.classList.add('active');
    const tabName = this.getAttribute('data-tab');

    activeTabContent(tabName);
}

function activeTabContent(tabName) {
    tabContentItem.forEach(function (item) {
        item.classList.contains(tabName) ? item.classList.add('active') : item.classList.remove('active');
    })
}





// Слайдер выбора программ
new Swiper('.image-slider', {
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev'
    },
    loop: true,
    slidesPerView: 2.4,
    centeredSlides: true,
    

    breakpoints: {
        1920: {
            slidesPerView: 2.4,
        },
        1200: {
            slidesPerView: 2.3,
        },
        610: {
            slidesPerView: 1.8,
        },
        420: {
            slidesPerView: 1.6,
        },
        320: {
            slidesPerView: 1.6,
        }
    }


});